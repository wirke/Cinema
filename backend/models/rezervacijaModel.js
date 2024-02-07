const db = require('../config/db');

class Rezervacija {
  static async sveRezervacije() {
    return db.any('SELECT r.*, p.vremePrikaza, f.naziv AS naziv_filma, pr.naziv AS naziv_prostorije FROM rezervacija r JOIN prikaz p ON r.int_prikaz = p.id JOIN film f ON p.id_film = f.id JOIN prostorija pr ON p.id_prostorija = pr.id');
  }

  static async kreirajRezervaciju(sediste, datum, imeKupca, id_prikaz) {
    return db.one('INSERT INTO rezervacija (sediste, datum, imeKupca, int_prikaz) VALUES ($1, $2, $3, $4) RETURNING *', [sediste, datum, imeKupca, id_prikaz]);
  }
}

module.exports = {
  Rezervacija
};