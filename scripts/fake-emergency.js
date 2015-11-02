'use strict';

// faker:
// http://marak.com/faker.js/# || https://www.npmjs.com/package/faker

// yargs:
// https://www.npmjs.com/package/yargs#with-yargs-the-options-be-just-a-hash

var mongoose = require('mongoose');
var bluebird = require('bluebird');
var faker = require('faker');
var argv = require('yargs').argv;

var Emergency = require('../models/emergency-model');

var config = require('../config/config');

mongoose.connect(config.MONGODB_URL);

bluebird.promisifyAll(mongoose);


var amount = argv.amount || 10;

var generateEmergency = function() {
  var emergency = {
    emergencyCode: 'EMERG-' + faker.random.number(),
    name: faker.lorem.words(),
    description: faker.lorem.words(),
  };
  console.log('Creating emergency: ', emergency.name);

  return Emergency.create(emergency);
};


(function generateData() {

  var queue = [];

  for (var i = amount - 1; i >= 0; i--) {
    queue.push(generateEmergency());
  }

  Promise.all(queue)
  .then(function(res) {
    console.log('Data created successfully.');
    process.exit(0);
  })
  .catch(function(err) {
    console.log('Error: ', err);
    process.exit(1);
  });

})();
