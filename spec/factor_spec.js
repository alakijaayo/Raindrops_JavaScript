const mocha = require("mocha");
const expect = require("chai").expect;
const Factor = require('../src/factor');
var assert = require("chai").expect;

describe("Factor", () => {
  var factor
});

beforeEach = () => {
  factor = new Factor();
}

it("should output 'Pling' if number is divisible by 3", function() {
  assert.equal(factor.pling(9), "Pling")
})
