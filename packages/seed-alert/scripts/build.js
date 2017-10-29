'use strict';

var pkg = require('../package.json');
var fs = require('fs');
var mkdirp = require('mkdirp');
var pathfinder = require('sass-pathfinder');
var sass = require('node-sass');

var file = pkg.name;
var includePaths = pathfinder(
  require('seed-badge'),
  require('seed-button'),
  require('seed-dash'),
  require('seed-publish'),
  require('seed-states')
);

// Default .css compile
sass.render({
  file: './scss/pack/'+file+'/__index.scss',
  includePaths: includePaths
}, function(error, result) {
  if (error) {
    console.error(error);
    return process.exit(1);
  }
  else {
    mkdirp('./dist');
    fs.writeFile('./dist/'+file+'.css', result.css, function(err){
      if(!err){
        return console.log(file+'.css created.');
      }
    })
  }
});

// Minified .css compile
sass.render({
  file: './scss/pack/'+file+'/__index.scss',
  includePaths: includePaths,
  outputStyle: 'compressed'
}, function(error, result) {
  if (error) {
    console.error(error);
    return process.exit(1);
  }
  else {
    mkdirp('./dist');
    fs.writeFile('./dist/'+file+'.min.css', result.css, function(err){
      if(!err){
        return console.log(file+'.min.css created.');
      }
    })
  }
});