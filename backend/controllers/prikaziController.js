const { Prikazi } = require('../models/prikazModel');

async function getPrikazi(req, res) {
    try {
      const prikazi = await Prikaz.sviPrikazi();
      res.json(prikazi);
    } catch (error) {
      console.error('Greška pri dohvaćanju prikaza:', error);
      res.status(500).json({ error: 'Greška pri dohvaćanju prikaza' });
    }
  }

module.exports = {
    getPrikazi
}