const fs = require('fs');
const path = require('path');

function readFileContent() {
  const filePath = path.join(__dirname, 'file-data.txt');
  const content = fs.readFileSync(filePath, 'utf-8');
  console.log('📂 File Content:\n', content);
}

module.exports = readFileContent;
