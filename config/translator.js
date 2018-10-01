const readline = require('readline');

const translator = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports = translator;
