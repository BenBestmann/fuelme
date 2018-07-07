'use strict';

const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
	name: { type: String, required: true }
},{
	collection: 'recipes',
	timestamps: true,
	toObject: { virtuals: true },
	toJSON: { virtuals: true }
});

module.exports = mongoose.model('Recipe', recipeSchema);
