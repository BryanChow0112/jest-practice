const analyzeArray = require("./analyzeArray");

test("should return an object", () => {
  expect(analyzeArray([1, 2, 3])).toEqual(expect.any(Object));
});

test("should return an object with average property", () => {
  expect(analyzeArray([1, 2, 3])).toHaveProperty("average");
});

test("should return an object with min property", () => {
  expect(analyzeArray([1, 2, 3])).toHaveProperty("min");
});

test("should return an object with max property", () => {
  expect(analyzeArray([1, 2, 3])).toHaveProperty("max");
});

test("should return an object with length property", () => {
  expect(analyzeArray([1, 2, 3])).toHaveProperty("length");
});

test("should return an object with ", () => {
    expect(analyzeArray([1, 2, 3])).toEqual({
      average: 2,
      min: 1,
      max: 3,
      length: 3
    });
  });

test("should return an object with ", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});

test("should return an object with ", () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual({
    average: 5.5,
    min: 1,
    max: 10,
    length: 10
  });
});