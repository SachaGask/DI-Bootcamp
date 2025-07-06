const greet = require('./greeting');
const showColorfulMessage = require('./colorful-message');
const readFileContent = require('./files/read-file');

console.log(greet('Sacha'));
showColorfulMessage();
readFileContent();
