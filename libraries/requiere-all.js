'use strict';

var fs = require('fs');

var toCamelCase = function (input) {
  return input.toLowerCase().replace(/-(.)/g, function(match, group) {
    return group.toUpperCase();
  });
};

module.exports = function(path, options) {
  options = options || {};
  var modules = {};
  var files = fs.readdirSync(path);

  files.forEach(function(file) {
    if (/\.js$/.test(file) && file !== 'index.js') {
      var name = file;

      if (options.stripFromName) {
        name = name.replace(options.stripFromName, '');
      }

      name = name.replace(/\.js/, '');
      name = toCamelCase(name);
      modules[name] = require(path + '/' + file);
    }
  });

  return modules;
};