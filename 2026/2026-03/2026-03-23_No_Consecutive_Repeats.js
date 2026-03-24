/*
freeCodeCamp - Daily Coding Challenges (03/23/2026) 

**No Consecutive Repeats**

Given a string, determine if it has no repeating characters.

- A string has no repeats if it does not have the same character two or more times in a row.

*/

function hasNoRepeats(str) {
  let prevChar = "";

  for (const char of str) {
    if (char === prevChar) return false;
    prevChar = char;
  }

  return true;
}

hasNoRepeats("hi world"); // should return true.
hasNoRepeats("hello world"); // should return false.
hasNoRepeats("abcdefghijklmnopqrstuvwxyz"); // should return true.
hasNoRepeats("freeCodeCamp"); // should return false.
hasNoRepeats("The quick brown fox jumped over the lazy dog."); // should return true.
hasNoRepeats("Mississippi"); // should return false.
