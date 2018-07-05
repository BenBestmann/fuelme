'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const routes = require('./api/controllers');

const port = process.env.PORT || 5000;

// Setup express app
const app = express();
// Remove express branding
app.set('x-powered-by', false);
// Add required middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(methodOverride('X-HTTP-Method-Override'));
// Enable CORS for all requests
app.use(cors());
// Make sure all header data is available if running behind a reverse proxy (e.g. heroku)
app.enable('trust proxy');

// Setup static routing for react client SPA
app.use('/', express.static(path.join(__dirname, 'web/dist')));

// Load API endpoints
app.use('/api', routes);

// Start server
app.listen(port);
