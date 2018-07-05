const fs = require('fs');
const path = require('path');
const basename  = path.basename(__filename);
const Sequelize = require('sequelize');
const db = {};

// Create new Sequelize instance with database connection settings
const sequelize = new Sequelize(process.env.DATABASE_URL, {
	dialect: 'postgres',
	dialectOptions: {
		ssl: true
	},
	define: {
		timestamps: true
	}
});

// Load all models
fs.readdirSync(__dirname)
	.filter(file => {
		return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
	})
	.forEach(file => {
		let model = sequelize['import'](path.join(__dirname, file));
		db[model.name] = model;
	});

sequelize.sync();

Object.keys(db).forEach(modelName => {
	if(db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
