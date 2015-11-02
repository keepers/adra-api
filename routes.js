'use strict';

var router = require('express').Router();
var _ = require('lodash');

//var middleware = require('./middleware');
var controllers = require('./controllers');

router.get('/', function(req, res) {
  res.json({
    message: 'Hooray, Welcome to adra API!'
  });
});


router.route('/emergencies')
  .get(controllers.emergency.find.bind(controllers.emergency))
  .post(controllers.emergency.create.bind(controllers.emergency));

router.route('/beneficiary')
  .get(controllers.beneficiary.find.bind(controllers.beneficiary))
  .post(controllers.beneficiary.create.bind(controllers.beneficiary));

router.route('/beneficiary/stats')
  .get(controllers.beneficiary.stats.bind(controllers.beneficiary));


module.exports = router;
