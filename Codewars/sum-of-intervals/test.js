const { expect } = require("chai");
const { sumIntervals } = require("./kata");

describe("sumIntervals", function() {
  describe("non overlapping intervals", () => {
    it("should return the correct sum for non overlapping intervals", function() {
      var test1 = [[1, 5]];
      expect(sumIntervals(test1)).to.eq(4);
    });
    it("should return the correct sum for non overlapping intervals", function() {
      var test2 = [[1, 5], [6, 10]];
      expect(sumIntervals(test2)).to.eq(8);
    });
  });
  describe("overlapping intervals", () => {
    it("should return the correct sum for overlapping intervals", function() {
      var test1 = [[1, 5], [1, 5]];
      expect(sumIntervals(test1)).to.eq(4);
    });
    it("should return the correct sum for overlapping intervals", function() {
      var test2 = [[1, 4], [7, 10], [3, 5]];
      expect(sumIntervals(test2)).to.eq(7);
    });
  });
});
