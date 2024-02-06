const express = require('express');
const router = express.Router();
const { getKorisnici } = require('../controllers/korisniciController');

router.get('/korisnici', getKorisnici);

module.exports = router;