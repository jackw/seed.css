var path = require('path');
var pathfinder = require('sass-pathfinder');

var files = pathfinder(
  require('seed-breakpoints'),
  require('seed-button'),
  require('seed-dash'),
  require('seed-publish'),
  path.join(__dirname, 'scss')
);

module.exports = files;
