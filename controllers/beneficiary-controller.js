'use strict';

var Controller = require('../libraries/controller');
var BeneficiaryModel = require('../models/beneficiary-model');

var BeneficiaryController = class extends Controller {
  constructor(Model) {
    super(Model);
  }

  stats(req, res, next) {
    this.model.stats()
    .then(function(collection) {
      res.status(200).json(collection);
    })
    .catch(function(err) {
      return next(err);
    });
  }

};

module.exports = new BeneficiaryController(BeneficiaryModel);
