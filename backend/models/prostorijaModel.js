const db = require('../config/db');

class Prostorija {
    static async sveProstorije() {
      return db.any('SELECT * FROM prostorija');
    }
  }

module.exports = {
  Prostorija
}