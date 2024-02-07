const { Prikaz } = require('../models/prikazModel');

async function getPrikazi(req, res) {
  try {
    const prikazi = await Prikaz.sviPrikazi();
    res.json(prikazi);
  } catch (error) {
    console.error('Greška pri dohvaćanju prikaza:', error);
    res.status(500).json({ error: 'Greška pri dohvaćanju prikaza' });
  }
}

async function kreirajPrikaz(req, res) {
  try {
    const { vremePrikaza, id_film, id_prostorija } = req.body;
    const noviPrikaz = await Prikaz.kreirajPrikaz(vremePrikaza, id_film, id_prostorija);
    res.json({ message: 'Prikaz uspešno kreiran', prikaz: noviPrikaz });
  } catch (error) {
    console.error('Greška pri kreiranju prikaza:', error);
    res.status(500).json({ error: 'Greška pri kreiranju prikaza' });
  }
}

async function obrisiPrikaz(req, res) {
  try {
    const { id } = req.params;
    await Prikaz.obrisiPrikaz(id);
    res.json({ message: 'Prikaz uspešno obrisan' });
  } catch (error) {
    console.error('Greška pri brisanju prikaza:', error);
    res.status(500).json({ error: 'Greška pri brisanju prikaza' });
  }
}

module.exports = {
  getPrikazi,
  kreirajPrikaz,
  obrisiPrikaz
};