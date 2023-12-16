import { calculateExpGain } from "../services/calculateExpGain";

describe("calculateExpGain", () => {
  it("calculates experience gain for different difficulty levels", () => {
    // Test case for an easy difficulty level
    expect(calculateExpGain("easy", 10)).toBe(50); // 10 * 5 * 1

    // Test case for a medium difficulty level
    expect(calculateExpGain("medium", 8)).toBe(60); // 8 * 5 * 1.5

    // Test case for a hard difficulty level
    expect(calculateExpGain("hard", 15)).toBe(150); // 15 * 5 * 2
  });

  it("returns 0 when an invalid difficulty is provided", () => {
    // Test case for an invalid difficulty level
    expect(calculateExpGain("invalid", 5)).toBe(0);
  });
});
