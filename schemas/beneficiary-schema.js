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

  ticketNumber: {
    type: Number,
    required: true
  },

  beneficiaries: {
    male: {
      type: Number,
      default: 0
    },
    female: {
      type: Number,
      default: 0
    },
    pregnant: {
      type: Number,
      default: 0
    },
    lactant: {
      type: Number,
      default: 0
    },
    disable: {
      type: Number,
      default: 0
    },
    greaterThan60: {
      type: Number,
      default: 0
    },
    lowerThan2: {
      type: Number,
      default: 0
    }
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('Beneficiary', BeneficiarySchema);
