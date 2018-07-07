'use strict';

const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');

router.get('/', (req, res) => {
	Recipe.find({}).then(recipes => res.json(recipes));
});

router.post('/', (req, res) => {
	Recipe.create(req.body)
		.then(data => res.status(201).json(data))
		.catch(error => res.status(500).json(error));
});

module.exports = router;
