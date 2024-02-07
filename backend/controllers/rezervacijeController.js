const { Rezervacija } = require('../models/rezervacijaModel');

async function getRezervacije(req, res) {
  try {
    const rezervacije = await Rezervacija.sveRezervacije();
    res.json(rezervacije);
  } catch (error) {
    console.error('Greška pri dohvaćanju rezervacija:', error);
    res.status(500).json({ error: 'Greška pri dohvaćanju rezervacija' });
  }
}

async function kreirajRezervaciju(req, res) {
  try {
    const { sediste, datum, imeKupca, id_prikaz } = req.body;
    const novaRezervacija = await Rezervacija.kreirajRezervaciju(sediste, datum, imeKupca, id_prikaz);
    res.json({ message: 'Rezervacija uspešno kreirana', rezervacija: novaRezervacija });
  } catch (error) {
    console.error('Greška pri kreiranju rezervacije:', error);
    res.status(500).json({ error: 'Greška pri kreiranju rezervacije' });
  }
}

module.exports = {
  getRezervacije,
  kreirajRezervaciju
};