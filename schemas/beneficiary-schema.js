'use strict';

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var BeneficiarySchema = new Schema({

  name: {
    first: {
      type: String,
      trim: true,
      lowercase: true,
      required: true
    },
    last: {
      type: String,
      trim: true,
      lowercase: true,
      required: true
    }
  },

  dni: {
    type: Number,
    required: true
  },

  gender: {
    type: String,
    enum: ['M', 'F'],
    required: true
  },

  age: {
    type: Number,
    required: true
  },

  beneficiaries: {
    masculine: {
      type: Number,
      default: 0
    },
    feminine: {
      type: Number,
      default: 0
    },
    total: {
      type: Number
    }
  },

  pregnant: {
    type: Number,
    default: 0
  },

  lactantsMothers: {
    type: Number,
    default: 0
  },

  disables: {
    type: Number,
    default: 0
  },

  elders: {
    type: Number,
    default: 0
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('Beneficiary', BeneficiarySchema);
