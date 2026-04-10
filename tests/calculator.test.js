const { divide } = require("../src/calculator");

describe("divide", () => {
  test("divides two positive numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("returns a floating-point result", () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  test("divides a negative numerator", () => {
    expect(divide(-10, 2)).toBe(-5);
  });

  test("divides by a negative denominator", () => {
    expect(divide(10, -2)).toBe(-5);
  });

  test("divides two negative numbers", () => {
    expect(divide(-10, -2)).toBe(5);
  });

  test("returns zero when numerator is zero", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("throws an error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });
});
