const db = require('../config/db');

class Prostorija {
  static async sveProstorije() {
    return db.any('SELECT * FROM prostorija');
  }

  static async kreirajProstoriju(naziv, visinaProstorije, duzinaProstorije, cenaSedista) {
    return db.one('INSERT INTO prostorija (naziv, visinaProstorije, duzinaProstorije, cenaSedista) VALUES ($1, $2, $3, $4) RETURNING *', [naziv, visinaProstorije, duzinaProstorije, cenaSedista]);
  }

  static async obrisiProstoriju(id) {
    return db.none('DELETE FROM prostorija WHERE id = $1', [id]);
  }
}

module.exports = {
  Prostorija
};