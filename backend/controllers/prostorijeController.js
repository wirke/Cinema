const { Prostorije } = require('../models');

async function getProstorije(req, res) {
    try {
      const prostorije = await Prostorija.sveProstorije();
      res.json(prostorije);
    } catch (error) {
      console.error('Greška pri dohvaćanju prostorija:', error);
      res.status(500).json({ error: 'Greška pri dohvaćanju prostorija' });
    }
  }

module.exports = {
    getProstorije
}