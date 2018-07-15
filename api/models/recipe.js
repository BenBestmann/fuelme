'use strict';

const mongoose = require('mongoose');
const units = require('./units');

const recipeSchema = new mongoose.Schema({
	name: { type: String, required: true, unique: true },
	description: { type: String },
	ingredients: [{
		ingredient: { type: mongoose.Schema.Types.ObjectId, refPath: 'ingredients.type' },
		type: { type: String, enum: ['Ingredient', 'Recipe'] },
		amount: { type: Number },
		unit: { type: String, enum: units }
	}],
	categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
	prepInstructions: { type: String },
	cookingInstructions: { type: String },
	prepTimeInMinutes: { type: Number },
	servings: { type: Number, required: true },
	pictureUrl: { type: String, default: 'https://s-media-cache-ak0.pinimg.com/originals/25/2e/ca/252eca592c1c85b46b7c7210ab23afe1.jpg' },
	sourceUrl: { type: String }
},{
	collection: 'recipes',
	timestamps: true,
	toObject: { virtuals: true },
	toJSON: { virtuals: true }
});

module.exports = mongoose.model('Recipe', recipeSchema);
