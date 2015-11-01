'use strict';

var config = require('./config/config');
var port   = config.PORT;

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var morgan     = require('morgan');
var mongoose   = require('mongoose');

var server = require('http').Server(app);
var io = require('socket.io')(server);

var routes      = require('./routes');
var middlewares = require('./middlewares');

var bluebird = require('bluebird');
bluebird.promisifyAll(mongoose);

if (config.DEV_MODE) {
  mongoose.set('debug', true);
}

mongoose.connect(config.MONGODB_URL);

app.set('superSecret', config.SECRET);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(middlewares.cors);
app.use('/', routes);

server.listen(port);
console.log('Magic happens on port ' + port);

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

module.exports = app;
