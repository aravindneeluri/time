const express = require('express');
const Router  = express.Router();
const {CT,finalResponse} = require('../handlers/time')


Router.get('/time',CT,finalResponse);

module.exports = Router
