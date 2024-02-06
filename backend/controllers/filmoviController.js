const { Filmovi } = require('../models');

async function getFilmovi(req, res) {
    try {
      const filmovi = await Film.sviFilmovi();
      res.json(filmovi);
    } catch (error) {
      console.error('Greška pri dohvaćanju filmova:', error);
      res.status(500).json({ error: 'Greška pri dohvaćanju filmova' });
    }
  }

module.exports = {
    getFilmovi
}