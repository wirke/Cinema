const express = require('express');
const router = express.Router();
const { getRezervacije, kreirajRezervaciju } = require('../controllers/rezervacijeController');

router.get('/rezervacije', getRezervacije);
router.post('/rezervacije', kreirajRezervaciju);

module.exports = router;