const readline = require('readline');

var translator = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports = translator;
