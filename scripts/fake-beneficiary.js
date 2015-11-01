'use strict';

// faker:
// http://marak.com/faker.js/# || https://www.npmjs.com/package/faker

// yargs:
// https://www.npmjs.com/package/yargs#with-yargs-the-options-be-just-a-hash

var mongoose = require('mongoose');
var bluebird = require('bluebird');
var faker = require('faker');
var argv = require('yargs').argv;

var Beneficiary = require('../models/beneficiary-model');

var config = require('../config/config');

mongoose.connect(config.MONGODB_URL);

bluebird.promisifyAll(mongoose);


var amount = argv.amount || 10;

var form = {
  id: faker.random.number(),
  name: faker.name.firstName(),
  description: faker.lorem.sentence()
};
var generateBeneficiary = function() {
  var beneficiary = {
    form: form,
    name: {
      first: faker.name.firstName(),
      last: faker.name.lastName()
    },
    dni: 36478543,
    gender: ['M', 'F'][Math.floor(Math.random() * ['M', 'F'].length)],
    age: faker.random.number(),
    beneficiaries: {
      masculine: 2,
      feminine: 3,
      total: 5
    },
    pregnants: [0, 1, 2][Math.floor(Math.random() * [0, 1, 2].length)],
    lactantMothers: [0, 1, 2][Math.floor(Math.random() * [0, 1, 2].length)],
    disables: [0, 1, 2][Math.floor(Math.random() * [0, 1, 2].length)],
    elders: [0, 1, 2][Math.floor(Math.random() * [0, 1, 2].length)]
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
