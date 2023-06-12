const chai = require("chai");
const { expect, assert } = chai;

const carService = {
  isItExpensive(issue) {
    if (issue === "Engine" || issue === "Transmission") {
      return `The issue with the car is more severe and it will cost more money`;
    } else {
      return `The overall price will be a bit cheaper`;
    }
  },
  discount(numberOfParts, totalPrice) {
    if (typeof numberOfParts !== "number" || typeof totalPrice !== "number") {
      throw new Error("Invalid input");
    }

    let discountPercentage = 0;

    if (numberOfParts > 2 && numberOfParts <= 7) {
      discountPercentage = 15;
    } else if (numberOfParts > 7) {
      discountPercentage = 30;
    }

    let result = (discountPercentage / 100) * totalPrice;

    if (numberOfParts <= 2) {
      return "You cannot apply a discount";
    } else {
      return `Discount applied! You saved ${result}$`;
    }
  },
  partsToBuy(partsCatalog, neededParts) {
    let totalSum = 0;

    if (!Array.isArray(partsCatalog) || !Array.isArray(neededParts)) {
      throw new Error("Invalid input");
    }

    neededParts.forEach((neededPart) => {
      partsCatalog.map((obj) => {
        if (obj.part === neededPart) {
          totalSum += obj.price;
        }
      });
    });

    return totalSum;
  },
};

describe("Tests for carService", () => {
  describe("test isItExpensive functionality", () => {
    it("if issue is Engine", () => {
      assert.equal(
        carService.isItExpensive("Engine"),
        "The issue with the car is more severe and it will cost more money"
      );
    });

    it("if issue is Transmission", () => {
      assert.equal(
        carService.isItExpensive("Transmission"),
        "The issue with the car is more severe and it will cost more money"
      );
    });

    it("if issue is Test", () => {
      assert.equal(
        carService.isItExpensive("Test"),
        "The overall price will be a bit cheaper"
      );
    });
  });

  describe("test discount functionality", () => {
    it("test if the input is Invalid", () => {
      assert.throw(() => carService.discount("test", 100), "Invalid input");
      assert.throw(() => carService.discount(100, "test"), "Invalid input");
    });

    it("test cannot apply a discount", () => {
      assert.equal(carService.discount(1, 100), "You cannot apply a discount");
      assert.equal(carService.discount(2, 100), "You cannot apply a discount");
    });

    it("test discount applied successfully", () => {
      assert.equal(
        carService.discount(3, 100),
        "Discount applied! You saved 15$"
      );

      assert.equal(
        carService.discount(7, 100),
        "Discount applied! You saved 15$"
      );

      assert.equal(
        carService.discount(8, 100),
        "Discount applied! You saved 30$"
      );
    });
  });

  describe("test partsToBuy functionality", () => {
    it("test if the input is Invalid", () => {
      assert.throw(
        () => carService.partsToBuy("test", ["part1", "part2"]),
        "Invalid input"
      );
      assert.throw(
        () => carService.partsToBuy(["part1", "part2"], "test"),
        "Invalid input"
      );
    });

    it("test if the functionality depending on the partsCatalog list", () => {
      const partsCatalogList = [
        { part: "x1", price: 105 },
        { part: "x2", price: 115 },
      ];
      const neededPartsList = ["x1", "x3"];
      assert.equal(
        carService.partsToBuy(partsCatalogList, neededPartsList),
        105
      );

      assert.equal(carService.partsToBuy([], neededPartsList), 0);
    });
  });
});
