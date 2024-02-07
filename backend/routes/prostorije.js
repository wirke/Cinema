const express = require('express');
const router = express.Router();
const { getProstorije, kreirajProstoriju, brisanjeProstorije } = require('../controllers/prostorijeController');

router.get('/prostorije', getProstorije);
router.post('/prostorije', kreirajProstoriju);
router.delete('/prostorije/:id', brisanjeProstorije);

module.exports = router;