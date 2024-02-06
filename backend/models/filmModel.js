const db = require('../config/db');

class Film {
    static async sviFilmovi() {
      return db.any('SELECT * FROM film');
    }
}

module.exports = {
    Film
};