'use strict';

module.exports = (sequelize, DataTypes) => {
	const Recipe = sequelize.define('recipe', {
		name: DataTypes.STRING
	});
	return Recipe;
};
