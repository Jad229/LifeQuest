import { calculateProgress } from "../services/calculateProgress";

describe("calculateProgress", () => {
  it("calculates progress when current experience is less than needed for next level", () => {
    expect(calculateProgress(50, 1000)).toBe(5); // 50 / 1000 * 100 = 5
    expect(calculateProgress(0, 200)).toBe(0); // 0 / 200 * 100 = 0
    expect(calculateProgress(300, 500)).toBe(60); // 300 / 500 * 100 = 60
  });

  it("calculates progress when current experience is equal to experience needed for next level", () => {
    expect(calculateProgress(1000, 1000)).toBe(0); // 1000 / 1000 * 100 = 100 should get reset to 0
    expect(calculateProgress(200, 200)).toBe(0); // 200 / 200 * 100 = 100 should get reset to 0
  });

  it("ensures progress does not exceed 100%", () => {
    expect(calculateProgress(500, 400)).toBe(0); // 500 / 400 * 100 = 125 (Limited to 100)
    expect(calculateProgress(150, 100)).toBe(0); // 150 / 100 * 100 = 150 (Limited to 100)
  });

  it("handles edge cases and zero division", () => {
    expect(calculateProgress(0, 0)).toBe(100); // 0 / 0 * 100 = NaN (Limited to 100)
    expect(calculateProgress(0, 100)).toBe(0); // 0 / 100 * 100 = 0
  });
});
