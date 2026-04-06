/*
freeCodeCamp - Daily Coding Challenges (04/05/2026) 

**Digit Rotation Escape**

Given a positive integer, determine if it, or any of its rotations, is evenly divisible by its digit count.

A rotation means to move the first digit to the end. For example, after 1 rotation, 123 becomes 231.

- Check rotation 0 (the given number) first.
- Given numbers won't contain any zeros.
- Return the first rotation number if one is found, or "none" if not.
*/

function getRotation(n) {
  let digits = n.toString();
  const numDigits = digits.length;

  for (let i = 0; i < numDigits; i++) {
    if (Number(digits) % numDigits === 0) {
      return i;
    }

    const firstDigit = digits[0];
    digits = digits.substr(1) + firstDigit;
  }

  return "none";
}

getRotation(123); // should return 0.
getRotation(13579); // should return 3.
getRotation(24681); // should return "none".
getRotation(84138789345); // should return 6.
