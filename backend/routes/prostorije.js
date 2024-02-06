const express = require('express');
const router = express.Router();
const { getProstorije } = require('../controllers/prostorijeController');

router.get('/prostorije', getProstorije);

module.exports = router;