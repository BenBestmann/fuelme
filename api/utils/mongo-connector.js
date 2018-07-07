'use strict';

/*!
 * Module dependencies
 */

const mongoose = require('mongoose');
const uriParser = require('mongodb-uri');
const Logger = require('footprint-node');

// Make mongoose use ES6 native promises
mongoose.Promise = global.Promise;

/**
 * Utility class to manage a MongoDB connection using mongoose.
 */

class MongoConnector {

	/**
	 * Call mongoose connect with the given connection options. If no options are provided, the connector
	 * will use the connection options specified in the environment variables.
	 */

	static connect(uri, callback) {
		uri = uri || process.env.MONGO_CONNECTION || 'mongodb://localhost:27017/fuelme';
		const connection = uriParser.parse(uri);
		// Connect and start Mongoose
		mongoose.connect(uri, { reconnectTries: 3 }, function(err) {
			if(err) {
				Logger.error(err, uri);
			} else {
				Logger.info('Connected to MongoDB: ', { hosts: connection.hosts, database: connection.database, username: connection.username });
			}
			if(callback) return callback(err);
		});
	}

}

/*!
 * Module exports
 */

module.exports = MongoConnector;
