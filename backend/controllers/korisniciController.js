const { Korisnik } = require('../models/korisnikModel');

async function dodajKorisnika(req, res) {
  const { ime, pol, mail, sifra } = req.body;
  
  try {
    const query = `
      INSERT INTO korisnik (ime, pol, mail, sifra)
      VALUES ($1, $2, $3, $4)
      RETURNING *;`;

    const noviKorisnik = await db.one(query, [ime, pol, mail, sifra]);
    res.status(201).json(noviKorisnik);
  } catch (error) {
    console.error('Greška pri dodavanju korisnika:', error);
    res.status(500).json({ error: 'Greška pri dodavanju korisnika' });
  }
}

async function getKorisnici(req, res) {
  try {
    const korisnici = await Korisnik.sviKorisnici();
    res.json(korisnici);
  } catch (error) {
    console.error('Greška pri dohvaćanju korisnika:', error);
    res.status(500).json({ error: 'Greška pri dohvaćanju korisnika' });
  }
}

module.exports = {
    getKorisnici,
    dodajKorisnika
}