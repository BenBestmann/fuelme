'use strict';

const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
	name: { type: String, required: true },
	seasonStartsAt: { type: Number, default: 0 },
	seasonEndsAt: { type: Number, default: 11 },
	isBasic: { type: Boolean, default: null }
},{
	collection: 'ingredients',
	timestamps: true,
	toObject: { virtuals: true },
	toJSON: { virtuals: true }
});

module.exports = mongoose.model('Ingredient', ingredientSchema);
