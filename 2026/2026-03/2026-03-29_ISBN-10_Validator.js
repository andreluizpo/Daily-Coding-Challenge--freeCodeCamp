/*
freeCodeCamp - Daily Coding Challenges (03/29/2026) 

**ISBN-10 Validator**

Given a string, determine if it's a valid ISBN-10.

An ISBN-10 consists of hyphens ("-") and 10 other characters. After removing the hyphens ("-"):
- The first 9 characters must be digits, and
- The final character may be a digit or the letter "X", which represents the number 10.

To validate it:
- Multiply each digit (or value) by its position (multiply the first digit by 1, the second by 2, and so on).
- Add all the results together.
- If the total is divisible by 11, it's valid.
*/

function isValidIsbn10(str) {
  const strWithoutHyphens = str.replaceAll("-", "");

  if (strWithoutHyphens.length !== 10) return false;

  for (const char of strWithoutHyphens.slice(0, 9)) {
    if (!/[0-9]/.test(char)) return false;
  }

  if (!/[0-9xX]/.test(strWithoutHyphens.slice(-1))) return false;

  let sum = 0;
  for (let i = 0; i < strWithoutHyphens.length; i++) {
    let value = 0;
    strWithoutHyphens[i] === "X" ? (value = 10) : (value = Number(strWithoutHyphens[i]));
    sum += value * (i + 1);
  }
  if (sum % 11 !== 0) return false;

  return true;
}

isValidIsbn10("0-306-40615-1"); // should return false.
isValidIsbn10("0-306-40615-2"); // should return true.
isValidIsbn10("0-8044-2957-X"); // should return true.
isValidIsbn10("X-306-40615-2"); // should return false.
isValidIsbn10("0-6822-2589-4"); // should return true.
