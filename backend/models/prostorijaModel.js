const db = require('../config/db');

class Prostorija {
  static async sveProstorije() {
    return db.any('SELECT * FROM prostorija');
  }

  static async kreirajProstoriju(naziv, brojSedista, cenaSedista) {
    return db.one('INSERT INTO prostorija (naziv, brojSedista, cenaSedista) VALUES ($1, $2, $3) RETURNING *', [naziv, brojSedista, cenaSedista]);
  }

  static async obrisiProstoriju(id) {
    return db.none('DELETE FROM prostorija WHERE id = $1', [id]);
  }
}

module.exports = {
  Prostorija
};