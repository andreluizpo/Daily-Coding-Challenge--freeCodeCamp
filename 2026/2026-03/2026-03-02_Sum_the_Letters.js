/*
freeCodeCamp - Daily Coding Challenges (03/02/2026) 

**Sum the Letters**

Given a string, return the sum of its letters.

- Letters are A-Z in uppercase or lowercase
- Letter values are: "A" = 1, "B" = 2, ..., "Z" = 26
- Uppercase and lowercase letters have the same value.
- Ignore all non-letter characters.

*/

function sumLetters(str) {
  let sum = 0;

  for (const char of str) {
    if (/[a-zA-Z]/.test(char)) sum += char.toUpperCase().charCodeAt(0) - 64;
  }

  return sum;
}

sumLetters("Hello"); // should return 52.
sumLetters("freeCodeCamp"); // should return 94.
sumLetters("The quick brown fox jumps over the lazy dog."); // should return 473.
sumLetters(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex nisl, pretium eu varius blandit, facilisis quis eros. Vestibulum ante ipsum primis in faucibus orci.",
); // should return 1681.
sumLetters("</404>"); // should return 0.
