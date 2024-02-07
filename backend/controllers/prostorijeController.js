const { Prostorija } = require('../models/prostorijaModel');

async function getProstorije(req, res) {
  try {
    const prostorije = await Prostorija.sveProstorije();
    res.json(prostorije);
  } catch (error) {
    console.error('Greška pri dohvaćanju prostorija:', error);
    res.status(500).json({ error: 'Greška pri dohvaćanju prostorija' });
  }
}

async function kreirajProstoriju(req, res) {
  try {
    const { naziv, brojSedista, cenaSedista } = req.body;
    const novaProstorija = await Prostorija.kreirajProstoriju(naziv, brojSedista, cenaSedista);
    res.json({ message: 'Prostorija uspešno kreirana', prostorija: novaProstorija });
  } catch (error) {
    console.error('Greška pri kreiranju prostorije:', error);
    res.status(500).json({ error: 'Greška pri kreiranju prostorije' });
  }
}

async function brisanjeProstorije(req, res) {
  try {
    const { id } = req.params;
    await Prostorija.obrisiProstoriju(id);
    res.json({ message: 'Prostorija uspešno obrisana' });
  } catch (error) {
    console.error('Greška pri brisanju prostorije:', error);
    res.status(500).json({ error: 'Greška pri brisanju prostorije' });
  }
}

module.exports = {
  getProstorije,
  kreirajProstoriju,
  brisanjeProstorije
};
