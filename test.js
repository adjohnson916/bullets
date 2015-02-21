/*!
 * bullets <https://github.com/jonschlinkert/bullets>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var assert = require('assert');
require('should');
var bullets = require('./');

describe('bullets', function () {
  it('should create a bulleted list:', function () {
    var actual = bullets([{text: 'Foo', lvl: '2'}, {text: 'Bar', lvl: 4}, {text: 'Baz', lvl: 2}]);
    actual.should.equal('    + Foo\n        - Bar\n    + Baz\n');
  });

  it('should take a custom function to modify bullets:', function () {
    var arr = [{text: 'Foo', lvl: '2'}, {text: 'Bar', lvl: 4}, {text: 'Baz', lvl: 2}];
    var actual = bullets(arr, function (ch) {
      return ch + ch;
    });
    actual.should.equal('    ++ Foo\n        -- Bar\n    ++ Baz\n');
  });

  it('should generate bullets when range is passed on `chars`:', function () {
    var arr = [{text: 'Foo', lvl: '2'}, {text: 'Bar', lvl: 4}, {text: 'Baz', lvl: 2}];
    var actual = bullets(arr, {chars: '1..5'}, function (ch) {
      return ch + '.';
    });
    actual.should.equal('    3. Foo\n        5. Bar\n    3. Baz\n');
  });

  it('should use bullets passed as an array on `chars`:', function () {
    var arr = [{text: 'AAA', lvl: 0}, {text: 'BBB', lvl: 1}, {text: 'CCC', lvl: 2}];
    var actual = bullets(arr, {chars: ['#', '##', '###']});
    actual.should.equal('# AAA\n  ## BBB\n    ### CCC\n');
  });
});

describe('bullets.flat()', function () {
  it('should create a flat list:', function () {
    var actual = bullets.flat(['a', 'b', 'c']);
    actual.should.equal('- a\n- b\n- c\n');
  });

  it('should take a custom function to modify bullets:', function () {
    var actual = bullets.flat(['a', 'b', 'c'], function (ch) {
      return ch + '...';
    });
    actual.should.equal('-... a\n-... b\n-... c\n');
  });

  it('should generate bullets when range is passed on `chars`:', function () {
    var arr = ['a', 'b', 'c'];
    var actual = bullets.flat(arr, {chars: '1..5'}, function (ch) {
      return ch + '.';
    });
    actual.should.equal('1. a\n1. b\n1. c\n');
  });

  it('should use bullets passed as an array on `chars`:', function () {
    var arr = ['a', 'b', 'c'];
    var actual = bullets.flat(arr, {chars: ['#', '##', '###']});
    actual.should.equal('# a\n# b\n# c\n');
  });
});