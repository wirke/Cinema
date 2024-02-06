const db = require('../config/db');

class Korisnik {
  static async sviKorisnici() {
    return db.any('SELECT * FROM korisnik');
  }
}

module.exports = {
  Korisnik
}