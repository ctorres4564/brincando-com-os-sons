// services/render_service.js - Serviço de renderização e automação de cards
const path = require('path');
const puppeteer = require('puppeteer-core');

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

async function launchBrowser() {
  return await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--font-render-hinting=none'
    ]
  });
}

module.exports = {
  launchBrowser,
  EDGE_PATH
};
