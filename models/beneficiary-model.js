'use strict';

var Model = require('../libraries/model');
var Beneficiary = require('../schemas/beneficiary-schema');

var BeneficiaryModel = class extends Model {
  constructor(SchemaModel) {
    super(SchemaModel);
  }
};

module.exports = new BeneficiaryModel(Beneficiary);
