const calculator = require("./calculator");

test("add 1 + 2 should be 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("add 10 + 3 should be 13", () => {
  expect(calculator.add(10, 3)).toBe(13);
});

test("subtract 10 - 3 should be 7", () => {
  expect(calculator.subtract(10, 3)).toBe(7);
});

test("subtract 100 - 10 should be 90", () => {
  expect(calculator.subtract(100, 10)).toBe(90);
});

test("multiply 10 * 3 should be 30", () => {
  expect(calculator.multiply(10, 3)).toBe(30);
});

test("multiply 100 * 10 should be 1000", () => {
  expect(calculator.multiply(100, 10)).toBe(1000);
});

test("divide 10 / 2 should be 5", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("divide 100 / 10 should be 10", () => {
  expect(calculator.divide(100, 10)).toBe(10);
});
