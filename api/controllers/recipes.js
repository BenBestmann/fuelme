'use strict';

const express = require('express');
const router = express.Router();
const Recipe = require('../models/index').recipe;

router.get('/', (req, res) => {
	Recipe.findAll()
		.then(recipes => res.json(recipes))
		.catch(error => res.status(500).json({'name': error.name, 'message': error.message}));
});

router.post('/', (req, res) => {
	Recipe.create(req.body)
		.then(data => res.status(201).json(data))
		.catch(error => res.status(500).json({'name': error.name, 'message': error.message}));
});

module.exports = router;
