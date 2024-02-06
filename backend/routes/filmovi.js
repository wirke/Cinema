const express = require('express');
const router = express.Router();
const { getFilmovi } = require('../controllers/filmoviController');

router.get('/filmovi', getFilmovi);

module.exports = router;