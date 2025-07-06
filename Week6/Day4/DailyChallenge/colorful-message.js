const chalk = require('chalk');

function showColorfulMessage() {
  console.log(chalk.green('✅ Challenge started!') + ' ' + chalk.blue("Let's do this!"));
}

module.exports = showColorfulMessage;
