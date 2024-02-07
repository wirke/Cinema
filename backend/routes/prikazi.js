const express = require('express');
const router = express.Router();
const { getPrikazi, kreirajPrikaz, obrisiPrikaz } = require('../controllers/prikaziController');

router.get('/prikazi', getPrikazi);
router.post('/prikazi', kreirajPrikaz);
router.delete('/prikazi/:id', obrisiPrikaz);

module.exports = router;