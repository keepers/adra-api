'use strict';

var Controller = require('../libraries/controller');
var BeneficiaryModel = require('../models/beneficiary-model');

var BeneficiaryController = class extends Controller {
  constructor(Model) {
    super(Model);
  }
};

module.exports = new BeneficiaryController(BeneficiaryModel);
