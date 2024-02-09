const express = require('express');
const router = express.Router();
const prikaziController = require('../controllers/prikaziController');

router.get('/prikazi', prikaziController.getPrikazi);
router.post('/prikazi', prikaziController.kreirajPrikaz);
router.delete('/prikazi/:id', prikaziController.obrisiPrikaz);

module.exports = router;