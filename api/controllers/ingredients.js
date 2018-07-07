'use strict';

const express = require('express');
const router = express.Router();
const Ingredient = require('../models/ingredient');

router.get('/', (req, res) => {
	Ingredient.find({}).then(ingredients => res.json(ingredients));
});

router.post('/', (req, res) => {
	Ingredient.create(req.body)
		.then(data => res.status(201).json(data))
		.catch(error => res.status(500).json(error));
});

module.exports = router;
