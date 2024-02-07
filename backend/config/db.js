const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  port: 3307,
  database: 'bioskop',
  user: 'root',
  password: ''
};

const connection = mysql.createConnection(dbConfig);

module.exports = connection;
