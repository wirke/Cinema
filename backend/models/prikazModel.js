const db = require('../config/db');

class Prikaz {
  static async sviPrikazi() {
    return db.any('SELECT p.*, f.naziv AS naziv_filma, pr.naziv AS naziv_prostorije FROM prikaz p JOIN film f ON p.id_film = f.id JOIN prostorija pr ON p.id_prostorija = pr.id');
  }

  static async kreirajPrikaz(vremePrikaza, id_film, id_prostorija) {
    return db.one('INSERT INTO prikaz (vremePrikaza, id_film, id_prostorija) VALUES ($1, $2, $3) RETURNING *', [vremePrikaza, id_film, id_prostorija]);
  }

  static async obrisiPrikaz(id) {
    return db.none('DELETE FROM prikaz WHERE id = $1', [id]);
  }
}

module.exports = {
  Prikaz
};