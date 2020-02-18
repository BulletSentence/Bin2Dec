const { Router } = require('express');
const ConvertController = require('./Controllers/ConvertController');

const routes = Router();

routes.post('/', ConvertController.store);

module.exports = routes;