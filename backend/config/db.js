const pgp = require('pg-promise')();

const dbConfig = {
  host: 'localhost',
  port: 5432,
  database: 'bioskop',
  user: 'korisnik',
  password: 'lozinka'
};

const db = pgp(dbConfig);

module.exports = db;
