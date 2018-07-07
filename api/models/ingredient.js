'use strict';

module.exports = (sequelize, DataTypes) => {
	const Ingredient = sequelize.define('ingredient', {
		name: { type: DataTypes.STRING, allowNull: false },
		seasonStartsAt: { type: DataTypes.INTEGER, defaultValue: 0 },
		seasonEndsAt: { type: DataTypes.INTEGER, defaultValue: 11 },
		isBasic: { type: DataTypes.BOOLEAN, defaultValue: null },
		isVegan: { type: DataTypes.BOOLEAN, defaultValue: null },
		isMeat: { type: DataTypes.BOOLEAN, defaultValue: null },
		isFish: { type: DataTypes.BOOLEAN, defaultValue: null },
		isVegetarian: { type: DataTypes.BOOLEAN, defaultValue: null },
		hasLactose: { type: DataTypes.BOOLEAN, defaultValue: null },
		hasGluten: { type: DataTypes.BOOLEAN, defaultValue: null }
	});
	return Ingredient;
};
