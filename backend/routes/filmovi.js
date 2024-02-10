const express = require('express');
const router = express.Router();
const filmoviController = require('../controllers/filmoviController');

router.get('/filmovi', filmoviController.sviFilmovi);
router.get('/filmovi/:id', filmoviController.getFilm);
router.post('/filmovi', filmoviController.kreirajFilm);
router.delete('/filmovi/:id', filmoviController.obrisiFilm);

module.exports = router;