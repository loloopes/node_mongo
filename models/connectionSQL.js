const mysql = require('mysql2');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'my-secret-pw',
  database: 'dbTest',
});

module.exports = connection;
