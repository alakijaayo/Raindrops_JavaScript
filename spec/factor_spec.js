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
  assert.equal(factor.pling(9), "Pling")
});

it("should output 'Plang' if number is divisible by 5", function() {
  assert.equal(factor.plang(10), "Plang")
})
