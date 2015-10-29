'use strict';

var router = require('express').Router();
var _ = require('lodash');

//var middleware = require('./middleware');
//var controllers = require('./controllers');

var routes = require('./routes');

router.get('/', function(req, res) {
  res.json({
    message: 'Hooray, Welcome to adra API!'
  });
});

module.exports = router;