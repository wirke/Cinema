const { Rezervacija } = require('../models');

async function getRezervacije(req, res) {
    try {
      const rezervacije = await Rezervacija.sveRezervacije();
      res.json(rezervacije);
    } catch (error) {
      console.error('Greška pri dohvaćanju rezervacija:', error);
      res.status(500).json({ error: 'Greška pri dohvaćanju rezervacija' });
    }
  }

  module.exports = {
    getRezervacije
  }