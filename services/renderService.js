// services/renderService.js - Serviço responsável pela orquestração do Puppeteer e exportação pixel-perfect
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

class RenderService {
  constructor(options = {}) {
    this.width = options.width || 1080;
    this.height = options.height || 1350;
    this.executablePath = options.executablePath || this.detectBrowser();
  }

  detectBrowser() {
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
    throw new Error('Nenhum navegador Chrome ou Edge compatível foi encontrado.');
  }

  async launchBrowser() {
    return await puppeteer.launch({
      executablePath: this.executablePath,
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-gpu',
        '--font-render-hinting=none',
        '--force-color-profile=srgb'
      ]
    });
  }

  async capturePage(page, htmlFilePath, outputPngPath) {
    const fileUrl = `file://${htmlFilePath.replace(/\\/g, '/')}`;
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    await page.evaluateHandle('document.fonts.ready');
    await new Promise(resolve => setTimeout(resolve, 600));

    await page.screenshot({
      path: outputPngPath,
      type: 'png',
      omitBackground: false
    });
  }
}

module.exports = RenderService;
