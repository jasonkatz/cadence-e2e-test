const { divide } = require("../src/calculator");

describe("divide", () => {
  test("returns the correct quotient for positive numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("returns the correct quotient for negative numbers", () => {
    expect(divide(-6, 3)).toBe(-2);
  });

  test("returns a decimal result when division is not exact", () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  test("throws an error when dividing by zero", () => {
    expect(() => divide(1, 0)).toThrow("Cannot divide by zero");
  });
});
