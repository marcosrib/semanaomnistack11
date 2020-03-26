const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileControle = require('./controllers/ProfileControle');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/ongs', OngController.create);

routes.post('/sessions', SessionController.create);

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileControle.index);

module.exports = routes;