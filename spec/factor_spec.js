const mocha = require("mocha");
const expect = require("chai").expect;
const Factor = require('../src/factor');
var assert = require("chai").assert;

describe("Factor", function() {
  var factor
});

beforeEach(function() {
  factor = new Factor();
});

it("should output 'Pling' if number is divisible by 3", function() {
  assert.equal(factor.check_number(9), "Pling")
});

it("should output 'Plang' if number is divisible by 5", function() {
  assert.equal(factor.check_number(10), "Plang")
});

it("should output 'Plong' if number is divisible by 7", function() {
  assert.equal(factor.check_number(14), "Plong")
});

it("should output 'PlingPlang' if number is divisible by 3 and 5", function() {
  assert.equal(factor.check_number(15), "PlingPlang")
});

it("should output 'PlingPlong' if number is divisible by 3 and 7", function() {
  assert.equal(factor.check_number(21), "PlingPlong")
});

it("should output 'PlangPlong' if number is divisible by 5 and 7", function() {
  assert.equal(factor.check_number(35), "PlangPlong")
});

it("should output 'PlingPlangPlong' if number is divisible by 3, 5 and 7", function() {
  assert.equal(factor.check_number(105), "PlingPlangPlong")
});

it("returns the number in string form if number is not divisible by 3, 5 or 7", function() {
  assert.equal(factor.check_number(4), "4")
})
