const db = require('../config/db');

class Film {
  static async sviFilmovi() {
    return db.any('SELECT * FROM film');
  }

  static async kreirajFilm(naziv, opis, godina, zanr) {
    return db.one('INSERT INTO film (naziv, opis, godina, zanr) VALUES ($1, $2, $3, $4) RETURNING *', [naziv, opis, godina, zanr]);
  }

  static async obrisiFilm(id) {
    return db.none('DELETE FROM film WHERE id = $1', [id]);
  }
}

module.exports = {
  Film
};