'use strict';

const express = require('express');
const router = express.Router();
const Category = require('../models/category');

router.get('/', (req, res) => {
	Category.find({}).then(categories => res.json(categories));
});

router.post('/', (req, res) => {
	Category.create(req.body)
		.then(data => res.status(201).json(data))
		.catch(error => res.status(500).json(error));
});

module.exports = router;
