import calculateExpNeeded from "../services/calculateExpNeeded";

describe("calculateExpNeeded", () => {
  it("calculates experience needed for a given level", () => {
    expect(calculateExpNeeded(1)).toBe(50); // (1 + (1 - 1)) * 50 = 50
    expect(calculateExpNeeded(5)).toBe(450); // (5 + (5 - 1)) * 50 = 450
    expect(calculateExpNeeded(10)).toBe(950); // (10 + (10 - 1)) * 50 = 950
  });

  it("handles edge cases and negative values", () => {
    expect(calculateExpNeeded(0)).toBe(0); // (0 + (0 - 1)) * 50 = 0
    expect(calculateExpNeeded(-1)).toBe(0); // (-1 + (-1 - 1)) * 50 = 0
    expect(calculateExpNeeded(100)).toBe(9950); // (100 + (100 - 1)) * 50 = 9950
  });
});
