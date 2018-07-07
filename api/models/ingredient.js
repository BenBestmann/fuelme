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
	seasonFirstMonth: { type: Number, default: 0 },
	seasonLastMonth: { type: Number, default: 11 },
	preferredSupplier: { type: String, default: 'Supermarkt' },
	isBasic: { type: Boolean, default: false },
	isMeat: { type: Boolean, default: null },
	isFish: { type: Boolean, default: null },
	isVegetarian: { type: Boolean, default: null },
	isVegan: { type: Boolean, default: null },
	hasLactose: { type: Boolean, default: null },
	hasGluten: { type: Boolean, default: null }
},{
	collection: 'ingredients',
	timestamps: true,
	toObject: { virtuals: true },
	toJSON: { virtuals: true }
});

ingredientSchema.virtual('hasSeason').get(function() {
	const now = new Date();
	return now.getMonth() >= this.seasonFirstMonth && now.getMonth() <= this.seasonLastMonth;
});

module.exports = mongoose.model('Ingredient', ingredientSchema);
