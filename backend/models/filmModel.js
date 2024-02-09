const db = require('../config/db');

class Film {
  static async getFilm(){
    return db.one('SELECT * FROM film WHERE id = $1', [id]);
  }
  
  static async sviFilmovi() {
    return db.any('SELECT * FROM film');
  }

  static async kreirajFilm(naziv, opis, zanr) {
    return db.one('INSERT INTO film (naziv, opis, zanr) VALUES ($1, $2, $3, $4) RETURNING *', [naziv, opis, zanr]);
  }

  static async obrisiFilm(id) {
    return db.none('DELETE FROM film WHERE id = $1', [id]);
  }
}

module.exports = {
  Film
};
