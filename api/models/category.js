'use strict';

const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
	name: { type: String, required: true, unique: true }
},{
	collection: 'categories',
	toObject: { virtuals: true },
	toJSON: { virtuals: true }
});

module.exports = mongoose.model('Category', categorySchema);
