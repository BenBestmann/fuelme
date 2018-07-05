'use strict';

const express = require('express');
const router = express.Router();
const Ingredient = require('../models/index').ingredient;

router.get('/', (req, res) => {
	Ingredient.findAll()
		.then(ingredients => res.json(ingredients))
		.catch(error => res.status(500).json({'name': error.name, 'message': error.message}));
});

router.post('/', (req, res) => {
	Ingredient.create(req.body)
		.then(data => res.status(201).json(data))
		.catch(error => res.status(500).json({'name': error.name, 'message': error.message}));
});

module.exports = router;
