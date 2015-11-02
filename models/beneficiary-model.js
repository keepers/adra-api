'use strict';

var Model = require('../libraries/model');
var Beneficiary = require('../schemas/beneficiary-schema');

var BeneficiaryModel = class extends Model {
  constructor(SchemaModel) {
    super(SchemaModel);
  }

  stats() {
    return this.SchemaModel.aggregate([{
      //https://docs.mongodb.org/manual/reference/operator/aggregation/group/
      $group:{
        _id: '$emergencyCode',

        averageMale: {
          $avg: '$beneficiaries.male'
        },
        averageFemale: {
          $avg: '$beneficiaries.female'
        },
        averagePregnant: {
          $avg: '$beneficiaries.pregnant'
        },
        averageLactant: {
          $avg: '$beneficiaries.lactant'
        },
        averageDisables: {
          $avg: '$beneficiaries.disable'
        },
        averageGreaterThan60: {
          $avg: '$beneficiaries.greaterThan60'
        },
        averageLowerThan2: {
          $avg: '$beneficiaries.lowerThan2'
        },

        totalMale: {
          $sum: '$beneficiaries.male'
        },
        totalFemale: {
          $sum: '$beneficiaries.female'
        },
        totalPregnant: {
          $sum: '$beneficiaries.pregnant'
        },
        totalLactant: {
          $sum: '$beneficiaries.lactant'
        },
        totalDisables: {
          $sum: '$beneficiaries.disable'
        },
        totalGreaterThan60: {
          $sum: '$beneficiaries.greaterThan60'
        },
        totalLowerThan2: {
          $sum: '$beneficiaries.lowerThan2'
        },

        totalCollection: {
          $sum: 1
        }
      }
     }]).execAsync();
  }

};

module.exports = new BeneficiaryModel(Beneficiary);
