const chai = require("chai");
const { expect } = chai;

// code to test
const mathEnforcer = {
  addFive: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }

    return num + 5;
  },
  subtractTen: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }

    return num - 10;
  },
  sum: function (num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return undefined;
    }

    return num1 + num2;
  },
};

// the test
describe("mathEnforcer", () => {
  describe("addFive", () => {
    it("return undefined if the passed parameter is not a number", () => {
      expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
      expect(mathEnforcer.addFive("num")).to.equal(undefined);
      expect(mathEnforcer.addFive(null)).to.equal(undefined);
    });

    it("return input plus five if the parameter is number", () => {
      expect(mathEnforcer.addFive(1)).to.equal(6);
      expect(mathEnforcer.addFive(-4)).to.equal(1);
      expect(mathEnforcer.addFive(1.5)).to.be.closeTo(6.5, 0.01);
    });
  });

  describe("subtractTen", () => {
    it("return undefined if the passed parameter is not a number", () => {
      expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
      expect(mathEnforcer.subtractTen("num")).to.equal(undefined);
      expect(mathEnforcer.subtractTen(null)).to.equal(undefined);
    });

    it("return input minus ten if the parameter is number", () => {
      expect(mathEnforcer.subtractTen(1)).to.equal(-9);
      expect(mathEnforcer.subtractTen(-4)).to.equal(-14);
      expect(mathEnforcer.subtractTen(1.5)).to.be.closeTo(-8.5, 0.01);
    });
  });

  describe("sum", () => {
    it("return undefined if any of the passed parameters is not a number", () => {
      expect(mathEnforcer.sum("1", "2")).to.equal(undefined);
      expect(mathEnforcer.sum("1", 2)).to.equal(undefined);
      expect(mathEnforcer.sum(1, "2")).to.equal(undefined);
    });

    it("return the sum of the parameters if both are numbers", () => {
      expect(mathEnforcer.sum(1, 2)).to.equal(3);
      expect(mathEnforcer.sum(5.5, 6)).to.be.closeTo(11.5, 0.01);
      expect(mathEnforcer.sum(5, 6.5)).to.be.closeTo(11.5, 0.01);
    });
  });
});
