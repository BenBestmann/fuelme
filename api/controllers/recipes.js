'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	return res.json({ 'status': 'list of all recipes is not supported yet' });
});

router.post('/', (req, res) => {
	return res.json({ 'status': 'adding recipes is not supported yet'})
});

module.exports = router;
