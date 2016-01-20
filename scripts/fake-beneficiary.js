'use strict';

// faker:
// http://marak.com/faker.js/# || https://www.npmjs.com/package/faker

// yargs:
// https://www.npmjs.com/package/yargs#with-yargs-the-options-be-just-a-hash

var mongoose = require('mongoose');
var ObjectId = require('mongoose').ObjectID;
var bluebird = require('bluebird');
var faker = require('faker');
var argv = require('yargs').argv;

var Beneficiary = require('../models/beneficiary-model');

var config = require('../config/config');

mongoose.connect(config.MONGODB_URL);

bluebird.promisifyAll(mongoose);


var amount = argv.amount || 10;

var generateBeneficiary = function() {
  var beneficiary = {
    emergencyCode: mongoose.Types.ObjectId('569ed8269353e9f4c51617aa'),
    name: {
      first: faker.name.firstName(),
      last: faker.name.lastName()
    },
    dni: 36478542,
    gender: ['M', 'F'][Math.floor(Math.random() * ['M', 'F'].length)],
    age: faker.random.number(),
    ticketNumber: 123,
    beneficiaries: {
      male: Math.floor(Math.random() * 3),
      female: Math.floor(Math.random() * 3),
      pregnant: Math.floor(Math.random() * 2),
      lactant: Math.floor(Math.random() * 2),
      disable: Math.floor(Math.random() * 2),
      greaterThan60: Math.floor(Math.random() * 2),
      lowerThan2: Math.floor(Math.random() * 3)
    },
  };
  console.log('Creating beneficiary: ', beneficiary.name);

  return Beneficiary.create(beneficiary);
};



(function generateData() {

  var queue = [];

  for (var i = amount - 1; i >= 0; i--) {
    queue.push(generateBeneficiary());
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
