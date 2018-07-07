'use strict';

const mongoose = require('mongoose');
const units = require('./units');

const recipeSchema = new mongoose.Schema({
	name: { type: String, required: true },
	ingredients: [{
		ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' },
		amount: { type: Number, required: true },
		unit: { type: String, enum: units, required: true }
	}],
	instructions: { type: String, required: true },
	servings: { type: Number, required: true },
	minutes: { type: Number },
	pictureUrl: { type: String, default: 'https://s-media-cache-ak0.pinimg.com/originals/25/2e/ca/252eca592c1c85b46b7c7210ab23afe1.jpg' },
	tags: { type: [String] }
},{
	collection: 'recipes',
	timestamps: true,
	toObject: { virtuals: true },
	toJSON: { virtuals: true }
});

module.exports = mongoose.model('Recipe', recipeSchema);
