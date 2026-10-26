const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');
const { execSync } = require('child_process');

// Encontrar executável do Chrome ou Edge instalado
function findBrowserExecutable() {
  const possiblePaths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
  ];

  for (const exePath of possiblePaths) {
    if (fs.existsSync(exePath)) {
      return exePath;
    }
  }
  throw new Error('Nenhum executável de navegador compatível (Chrome ou Edge) foi encontrado.');
}

async function renderCards() {
  console.log('🚀 Iniciando renderização dos cards do Episódio 01...');
  
  const executablePath = findBrowserExecutable();
  console.log(`🧭 Usando navegador: ${executablePath}`);

  const outputDir = path.resolve(__dirname, '../Brincando_com_os_Sons/Publicacao_01');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--font-render-hinting=none',
      '--force-color-profile=srgb'
    ]
  });

  const cards = [
    { file: 'card01.html', output: '01_capa.png', title: 'Card 01 - Capa' },
    { file: 'card02.html', output: '02_figuras.png', title: 'Card 02 - Exploração Visual' },
    { file: 'card03.html', output: '03_descoberta.png', title: 'Card 03 - Descoberta do Som' },
    { file: 'card04.html', output: '04_desafio.png', title: 'Card 04 - Desafio Interativo' },
    { file: 'card05.html', output: '05_encerramento.png', title: 'Card 05 - Encerramento e CTA' }
  ];

  const page = await browser.newPage();
  await page.setViewport({
    width: 1080,
    height: 1350,
    deviceScaleFactor: 1
  });

  for (const card of cards) {
    const filePath = path.resolve(__dirname, `../pages/${card.file}`);
    const fileUrl = `file://${filePath.replace(/\\/g, '/')}`;
    console.log(`📸 Renderizando ${card.title} (${card.output})...`);

    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    
    // Aguardar o carregamento completo das fontes web
    await page.evaluateHandle('document.fonts.ready');
    await new Promise(r => setTimeout(r, 600));

    const outputPath = path.join(outputDir, card.output);
    await page.screenshot({
      path: outputPath,
      type: 'png',
      omitBackground: false
    });
    console.log(`   ✅ Salvo em: ${outputPath}`);
  }

  // Geração do carrossel_completo.pdf consolidado
  console.log('📄 Gerando PDF unificado de conferência (carrossel_completo.pdf)...');
  const pdfTemplatePath = path.resolve(__dirname, '../pages/carrossel_pdf.html');
  
  // Criar template HTML com todas as páginas para geração do PDF
  let pdfContent = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="../src/styles/design-system.css">
  <style>
    @page {
      size: 1080px 1350px;
      margin: 0;
    }
    body {
      margin: 0;
      padding: 0;
      width: 1080px;
    }
    .pdf-page {
      width: 1080px;
      height: 1350px;
      page-break-after: always;
      overflow: hidden;
      display: block;
      position: relative;
    }
    .pdf-page:last-child {
      page-break-after: avoid;
    }
  </style>
</head>
<body>
`;

  for (const card of cards) {
    const cardHtml = fs.readFileSync(path.resolve(__dirname, `../pages/${card.file}`), 'utf-8');
    // Extrai o conteúdo dentro de body
    const bodyMatch = cardHtml.match(/<body>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
      pdfContent += `  <div class="pdf-page">\n${bodyMatch[1]}\n  </div>\n`;
    }
  }
  pdfContent += `</body>\n</html>`;
  fs.writeFileSync(pdfTemplatePath, pdfContent, 'utf-8');

  const pdfFileUrl = `file://${pdfTemplatePath.replace(/\\/g, '/')}`;
  await page.goto(pdfFileUrl, { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(r => setTimeout(r, 800));

  const pdfOutputPath = path.join(outputDir, 'carrossel_completo.pdf');
  await page.pdf({
    path: pdfOutputPath,
    width: '1080px',
    height: '1350px',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  console.log(`   ✅ PDF consolidado gerado: ${pdfOutputPath}`);

  await browser.close();

  // Gerar o pacote ZIP com todos os arquivos
  console.log('📦 Gerando pacote final publicacao_01.zip...');
  const zipPath = path.join(outputDir, 'publicacao_01.zip');
  if (fs.existsSync(zipPath)) {
    fs.unlinkSync(zipPath);
  }

  // Compactar usando PowerShell no Windows
  const psCommand = `powershell -NoProfile -Command "Compress-Archive -Path '${outputDir}\\*' -DestinationPath '${zipPath}' -Force"`;
  try {
    execSync(psCommand, { stdio: 'inherit' });
    console.log(`   ✅ Pacote ZIP criado com sucesso: ${zipPath}`);
  } catch (err) {
    console.error('Erro ao criar ZIP via PowerShell:', err.message);
  }

  console.log('🎉 Todos os arquivos foram gerados com sucesso!');
}

renderCards().catch(err => {
  console.error('❌ Erro na execução:', err);
  process.exit(1);
});
