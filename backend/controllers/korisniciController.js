const { Korisnik } = require('../models');

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
    getKorisnici
}