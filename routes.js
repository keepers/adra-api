'use strict';

var router = require('express').Router();
var _ = require('lodash');

//var middleware = require('./middleware');
var controllers = require('./controllers');

var routes = require('./routes');

router.get('/', function(req, res) {
  res.json({
    message: 'Hooray, Welcome to adra API!'
  });
});


router.route('/beneficiary')
  .get(controllers.beneficiary.find.bind(controllers.beneficiary))
  .post(controllers.beneficiary.create.bind(controllers.beneficiary));


module.exports = router;
