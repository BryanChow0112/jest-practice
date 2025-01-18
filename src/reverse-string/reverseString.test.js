const reverseString = require('./reverseString');

test('hello should be olleh', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('world should be dlrow', () => {
    expect(reverseString('world')).toBe('dlrow');
});

test('TEST should be TSET', () => {
    expect(reverseString('TEST')).toBe('TSET');
});

test('hello world should be dlrow olleh', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('Hello World should be dlroW olleH', () => {
    expect(reverseString('Hello World')).toBe('dlroW olleH');
});

test('should be empty', () => {
    expect(reverseString('')).toBe('');
});

test('123 should be 321', () => {
    expect(reverseString('123')).toBe('321');
});

test('1234567890 should be 0987654321', () => {
    expect(reverseString('1234567890')).toBe('0987654321');
});

test('a should be a', () => {
    expect(reverseString('a')).toBe('a');
});

test('abc123def should be fed321cba', () => {
    expect(reverseString('abc123def')).toBe('fed321cba');
});