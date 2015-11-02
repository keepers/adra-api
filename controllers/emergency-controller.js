'use strict';

var Controller = require('../libraries/controller');
var EmergencyModel = require('../models/emergency-model');

var EmergencyController = class extends Controller {
  constructor(Model) {
    super(Model);
  }
};

module.exports = new EmergencyController(EmergencyModel);