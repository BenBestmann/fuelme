'use strict';

const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
	name: { type: String, unique: true, required: true },
	category: { type: String, enum: ['vegan', 'abp', 'meat', 'poultry', 'seafood'] },
	season: { type: [Number], default: Array.from(Array(12).keys()) },
	isBasic: { type: Boolean, default: false },
	synonyms: { type: [String] },
	tags: { type: [String] },
	preferredSupplier: { type: String, default: 'Supermarkt' },
	hasLactose: { type: Boolean, default: false },
	hasGluten: { type: Boolean, default: false }
},{
	collection: 'ingredients',
	timestamps: true,
	toObject: { virtuals: true },
	toJSON: { virtuals: true }
});

ingredientSchema.virtual('hasSeason').get(function() {
	const now = new Date();
	return (this.season.includes(now.getMonth()));
});

module.exports = mongoose.model('Ingredient', ingredientSchema);
