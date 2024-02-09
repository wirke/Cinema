const express = require('express');
const router = express.Router();
const rezervacijeController = require('../controllers/rezervacijeController');

router.get('/rezervacije', rezervacijeController.getRezervacije);
router.post('/rezervacije', rezervacijeController.kreirajRezervaciju);

module.exports = router;