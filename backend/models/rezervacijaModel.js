const db = require('../config/db');

class Rezervacija {
    static async sveRezervacije() {
      return db.any('SELECT * FROM rezervacija');
    }
  }

module.exports = {
  Rezervacija
}