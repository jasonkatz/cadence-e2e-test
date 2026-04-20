const { divide } = require("../src/calculator");

describe("divide", () => {
  test("divides two numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("returns a decimal result", () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  test("divides a negative number", () => {
    expect(divide(-6, 3)).toBe(-2);
  });

  test("throws an error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });
});
