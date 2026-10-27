const fs = require('fs');
const path = require('path');

function getPngDimensions(filePath) {
  const fd = fs.openSync(filePath, 'r');
  const buffer = Buffer.alloc(24);
  fs.readSync(fd, buffer, 0, 24, 0);
  fs.closeSync(fd);

  // Assinatura PNG: 89 50 4E 47 0D 0A 1A 0A
  if (buffer.toString('hex', 0, 8) !== '89504e470d0a1a0a') {
    throw new Error(`Arquivo não é um PNG válido: ${filePath}`);
  }

  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  return { width, height };
}

function runTests() {
  console.log('🧪 Iniciando suíte de testes e validação da publicação...');
  let errors = 0;

  const targetDir = path.resolve(__dirname, '../Brincando_com_os_Sons/Publicacao_01');
  const requiredFiles = [
    '01_capa.png',
    '02_figuras.png',
    '03_descoberta.png',
    '04_desafio.png',
    '05_encerramento.png',
    '06_assinatura.png',
    'legenda_instagram.txt',
    'legenda_facebook.txt',
    'texto_alternativo.txt',
    'carrossel_completo.pdf',
    'publicacao_01.zip'
  ];

  console.log('\n1. Verificando presença de todos os arquivos obrigatórios:');
  for (const file of requiredFiles) {
    const fullPath = path.join(targetDir, file);
    if (fs.existsSync(fullPath)) {
      const stats = fs.statSync(fullPath);
      console.log(`   ✅ [OK] ${file} (${stats.size} bytes)`);
    } else {
      console.error(`   ❌ [FALHA] Arquivo ausente: ${file}`);
      errors++;
    }
  }

  console.log('\n2. Verificando dimensões das imagens (obrigatório: 1080 × 1350 px):');
  const pngFiles = [
    '01_capa.png',
    '02_figuras.png',
    '03_descoberta.png',
    '04_desafio.png',
    '05_encerramento.png',
    '06_assinatura.png'
  ];

  for (const png of pngFiles) {
    const fullPath = path.join(targetDir, png);
    if (fs.existsSync(fullPath)) {
      const { width, height } = getPngDimensions(fullPath);
      if (width === 1080 && height === 1350) {
        console.log(`   ✅ [OK] ${png} -> Dimensões exatas: ${width}x${height} px (Proporção 4:5)`);
      } else {
        console.error(`   ❌ [FALHA] ${png} com dimensões incorretas: ${width}x${height} px`);
        errors++;
      }
    }
  }

  console.log('\n3. Verificação de integridade e restrições de conteúdo:');
  const textosParaVerificar = [
    'legenda_instagram.txt',
    'legenda_facebook.txt',
    'texto_alternativo.txt'
  ];

  const termosProibidos = [
    'FonoPrátika',
    'fonopratika',
    'diagnóstico de transtorno',
    'cura da fala',
    'tratamento obrigatório'
  ];

  for (const txtFile of textosParaVerificar) {
    const content = fs.readFileSync(path.join(targetDir, txtFile), 'utf-8');
    for (const termo of termosProibidos) {
      if (content.toLowerCase().includes(termo.toLowerCase())) {
        console.error(`   ❌ [FALHA] Termo restrito "${termo}" encontrado em ${txtFile}`);
        errors++;
      }
    }
  }
  console.log('   ✅ [OK] Nenhuma restrição de marca ou linguagem diagnóstica violada.');

  console.log('\n==================================================');
  if (errors === 0) {
    console.log('🎉 SUCESSO: Todos os testes passaram sem nenhum erro!');
    process.exit(0);
  } else {
    console.error(`❌ FALHA: ${errors} erro(s) encontrado(s).`);
    process.exit(1);
  }
}

runTests();
