const capitalize = require("./capitalize");

test("hello should be Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("world should be World", () => {
  expect(capitalize("world")).toBe("World");
});

test("TEST should be TEST", () => {
  expect(capitalize("TEST")).toBe("TEST");
});

test("hello world should be Hello world", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("Hello World should be Hello World", () => {
  expect(capitalize("Hello World")).toBe("Hello World");
});

test("should be empty", () => {
  expect(capitalize("")).toBe("");
});

test("123 should be 123", () => {
  expect(capitalize("123")).toBe("123");
});
