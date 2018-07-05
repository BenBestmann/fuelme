'use strict';

module.exports = (sequelize, DataTypes) => {
	const Ingredient = sequelize.define('ingredient', {
		name: DataTypes.STRING
	});
	return Ingredient;
};
