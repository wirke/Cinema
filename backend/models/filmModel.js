const connection = require('../config/db');

class Film {
  static async getFilm(id) {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM film WHERE id = ?', [id], (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results[0]);
      });
    });
  }

  static async sviFilmovi() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM film', (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  }

  static async kreirajFilm(naziv, opis, zanr) {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO film (naziv, opis, zanr) VALUES (?, ?, ?)', [naziv, opis, zanr], (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results.insertId);
      });
    });
  }

  static async obrisiFilm(id) {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM film WHERE id = ?', [id], (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve();
      });
    });
  }
}

module.exports = {
  Film
};
