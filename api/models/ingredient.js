'use strict';

const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
	name: { type: String, required: true },
	nutritionData: {
		kcal: { type: Number },
		protein: { type: Number },
		lipid: { type: Number },
		fiber: { type: Number },
		totalCarbs: { type: Number },
		sugar: { type: Number }
	},
	season: { type: [Number] },
	preferredSupplier: { type: String, default: 'Supermarkt' },
	isBasic: { type: Boolean, default: false },
	isMeat: { type: Boolean },
	isFish: { type: Boolean },
	isVegetarian: { type: Boolean },
	isVegan: { type: Boolean },
	hasLactose: { type: Boolean },
	hasGluten: { type: Boolean }
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
