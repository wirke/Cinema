const express = require('express');
const router = express.Router();
const { getRezervacije } = require('../controllers/rezervacijeController');

router.get('/rezervacije', getRezervacije);

module.exports = router;