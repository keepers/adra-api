'use strict';

var Model = require('../libraries/model');
var Emergency = require('../schemas/emergency-schema');

var EmergencyModel = class extends Model {
  constructor(SchemaModel) {
    super(SchemaModel);
  }
};

module.exports = new EmergencyModel(Emergency);