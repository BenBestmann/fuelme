'use strict';

const express = require('express');
const router = express.Router();

// Register new routes here...
router.use('/recipes', require('./recipes'));
router.use('/ingredients', require('./ingredients'));

module.exports = router;
