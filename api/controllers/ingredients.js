'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	return res.json({ 'status': 'list of all ingredients is not supported yet' });
});

router.post('/', (req, res) => {
	return res.json({ 'status': 'adding ingredients is not supported yet'})
});

module.exports = router;
