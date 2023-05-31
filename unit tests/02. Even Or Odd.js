const chai = require("chai");
const expect = chai.expect;

function isOddOrEven(string) {
  if (typeof string !== "string") {
    return undefined;
  }

  if (string.length % 2 === 0) {
    return "even";
  }

  return "odd";
}

describe("Test Even or Odd functionality", function () {
  it("Test for undefined", function () {
    expect(isOddOrEven(1)).to.equal(undefined);
  });

  it("Test for even", function () {
    expect(isOddOrEven("abcd")).to.equal("even");
  });

  it("Test for odd", function () {
    expect(isOddOrEven("abc")).to.equal("odd");
  });
});
