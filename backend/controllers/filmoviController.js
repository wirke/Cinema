const { Film } = require('../models/filmModel');

async function getFilmovi(req, res) {
  try {
    const filmovi = await Film.sviFilmovi();
    res.json(filmovi);
  } catch (error) {
    console.error('Greška pri dohvaćanju filmova:', error);
    res.status(500).json({ error: 'Greška pri dohvaćanju filmova' });
  }
}

async function kreirajFilm(req, res) {
  try {
    const { naziv, opis, godina, zanr } = req.body;
    const noviFilm = await Film.kreirajFilm(naziv, opis, godina, zanr);
    res.json({ message: 'Film uspešno kreiran', film: noviFilm });
  } catch (error) {
    console.error('Greška pri kreiranju filma:', error);
    res.status(500).json({ error: 'Greška pri kreiranju filma' });
  }
}

async function obrisiFilm(req, res) {
  try {
    const { id } = req.params;
    await Film.obrisiFilm(id);
    res.json({ message: 'Film uspešno obrisan' });
  } catch (error) {
    console.error('Greška pri brisanju filma:', error);
    res.status(500).json({ error: 'Greška pri brisanju filma' });
  }
}

module.exports = {
  getFilmovi,
  kreirajFilm,
  obrisiFilm
};