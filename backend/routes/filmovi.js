const express = require('express');
const router = express.Router();
const { getFilmovi, kreirajFilm, obrisiFilm } = require('../controllers/filmoviController');

router.get('/filmovi', getFilmovi);
router.post('/filmovi', kreirajFilm);
router.delete('/filmovi/:id', obrisiFilm);

module.exports = router;