'use strict';

var _ = require('lodash');

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
        _id: '$form.id',

        averagePregnants: {
          $avg: '$pregnants'
        },
        averageLactantMothers: {
          $avg: '$lactantMothers'
        },
        averageDisables: {
          $avg: '$disables'
        },
        averageElders: {
          $avg: '$elders'
        },

        totalPregnants: {
          $sum: '$pregnants'
        },
        totalLactantMothers: {
          $sum: '$lactantMothers'
        },
        totalDisables: {
          $sum: '$disables'
        },
        totalElders: {
          $sum: '$elders'
        },

        totalCollection: {
          $sum: 1
        }
      }
     }]).execAsync();
  }

};

module.exports = new BeneficiaryModel(Beneficiary);
