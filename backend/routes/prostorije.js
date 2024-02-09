const express = require('express');
const router = express.Router();
const prostorijeController = require('../controllers/prostorijeController');

router.get('/prostorije', prostorijeController.getProstorije);
router.post('/prostorije', prostorijeController.kreirajProstoriju);
router.delete('/prostorije/:id', prostorijeController.brisanjeProstorije);

module.exports = router;