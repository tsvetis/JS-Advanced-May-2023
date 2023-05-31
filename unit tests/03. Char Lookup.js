const chai = require("chai");
const expect = chai.expect;

// the function
function lookupChar(string, index) {
  if (typeof string !== "string" || !Number.isInteger(index)) {
    return undefined;
  }

  if (string.length <= index || index < 0) {
    return "Incorrect index";
  }

  return string.charAt(index);
}

// the tests
describe("retrieve character at index from string parameter", () => {
  it("valid input -> (a, 0) => a", () => {
    expect(lookupChar("a", 0)).to.eq("a");
  });

  it("valid input -> (ab, 1) => b", () => {
    expect(lookupChar("ab", 1)).to.eq("b");
  });

  it("invalid input - second parameter is floating point number", () => {
    expect(lookupChar("a", 1.1)).to.be.undefined;
  });

  it("invalid input - first parameter not a string", () => {
    expect(lookupChar(0, 0)).to.be.undefined;
  });

  it("invalid input - second parameter is string", () => {
    expect(lookupChar("a", "a")).to.be.undefined;
  });

  it("invalid input - second parameter is negative number", () => {
    expect(lookupChar("a", -1)).to.eq("Incorrect index");
  });

  it("invalid input - second parameter is out of bounderies", () => {
    expect(lookupChar("a", 1)).to.eq("Incorrect index");
  });
});
