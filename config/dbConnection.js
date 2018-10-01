var mysql = require('mysql');

var connMySQL = function() {
    console.log('Database connection stablished.');//Explicitly declare when database is acessed
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "jusearch"
  });
};

module.exports = connMySQL;

