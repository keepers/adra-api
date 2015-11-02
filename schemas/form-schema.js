'use strict';

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var EmergencySchema = new Schema({

  emergencyCode: {
    type: String,
    trim: true,
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('Emergency', EmergencySchema);
