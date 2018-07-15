'use strict';

const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
	name: { type: String, required: true, unique: true },
	monthsOfSeason: { type: [Number], default: Array.from(Array(12).keys()) },
	isBasic: { type: Boolean, default: false }, // if true, will not be added to the shopping list
	parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' },
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
	return (this.monthsOfSeason.includes(now.getMonth()));
});

module.exports = mongoose.model('Ingredient', ingredientSchema);
