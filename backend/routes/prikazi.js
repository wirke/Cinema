const express = require('express');
const router = express.Router();
const { getPrikazi } = require('../controllers/prikaziController');

router.get('/prikazi', getPrikazi);

module.exports = router;