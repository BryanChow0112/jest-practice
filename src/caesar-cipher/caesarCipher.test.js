const caesarCipher = require("./caesarCipher");

test("should be empty", () => {
  expect(caesarCipher("", 3)).toBe("");
});

test("xyz should be abc", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("hello should be khoor", () => {
  expect(caesarCipher("hello", 3)).toBe("khoor");
});

test("HeLLo should be KhOOr", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Hello World should be Khoor Zruog", () => {
  expect(caesarCipher("Hello World", 3)).toBe("Khoor Zruog");
});

test("Hello, World! should be Khoor, Zruog!", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Hello, World! 123 should be Khoor, Zruog! 123", () => {
  expect(caesarCipher("Hello, World! 123", 3)).toBe("Khoor, Zruog! 123");
});
