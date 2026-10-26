// utils/pngValidator.js - Utilitário de leitura e validação de dimensões PNG
const fs = require('fs');

function getDimensions(filePath) {
  const fd = fs.openSync(filePath, 'r');
  const buffer = Buffer.alloc(24);
  fs.readSync(fd, buffer, 0, 24, 0);
  fs.closeSync(fd);

  if (buffer.toString('hex', 0, 8) !== '89504e470d0a1a0a') {
    throw new Error(`Arquivo não é um PNG válido: ${filePath}`);
  }

  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  return { width, height };
}

module.exports = {
  getDimensions
};
