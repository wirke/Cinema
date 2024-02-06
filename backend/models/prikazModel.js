const db = require('../config/db');

class Prikaz {
    static async sviPrikazi() {
      return db.any('SELECT * FROM prikaz');
    }
  }

module.exports = {
  Prikaz
}