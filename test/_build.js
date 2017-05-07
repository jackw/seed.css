// Test :: Build
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-color-scheme: build', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });

  it('should build', function() {
    expect(output).to.exist;
  });
});
