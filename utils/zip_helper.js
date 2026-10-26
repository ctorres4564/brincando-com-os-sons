// utils/zip_helper.js - Utilitário para compactação de arquivos e pastas
const { execSync } = require('child_process');
const fs = require('fs');

function createZipArchive(sourceDir, destinationZip) {
  if (fs.existsSync(destinationZip)) {
    fs.unlinkSync(destinationZip);
  }
  const cmd = `powershell -Command "Compress-Archive -Path '${sourceDir}\\*' -DestinationPath '${destinationZip}' -Force"`;
  execSync(cmd);
}

module.exports = {
  createZipArchive
};
