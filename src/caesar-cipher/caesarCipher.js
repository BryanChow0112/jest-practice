// A caesarCipher function that takes a string and a shift factor and returns it
// with each character “shifted”. For example, plaintext alphabet with a shift factor of 3
// "a" was encrypted as "D", "b" as "E", etc.
function caesarCipher(string, shift) {
  return string
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      } else {
        return char;
      }
    })
    .join("");
}

module.exports = caesarCipher;
