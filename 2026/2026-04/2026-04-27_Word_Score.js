/*
freeCodeCamp - Daily Coding Challenges (04/27/2026) 

**Word Score**

Given a word, return its score using a standard letter-value table:

+------+-----+
|Letter|Value|
+------+-----+
|   A  |   1 |
|   B  |   2 |
|  ... | ... |
|   Z  |  26 |
+------+-----+

- Upper and lowercase letters have the same value.

*/

function getWordScore(word) {
  let sum = 0;

  for (const letter of word) {
    sum = sum + (letter.toUpperCase().charCodeAt(0) - 64);
  }

  return sum;
}

getWordScore("hi"); // should return 17.
getWordScore("hello"); // should return 52.
getWordScore("hippopotamus"); // should return 169.
getWordScore("freeCodeCamp"); // should return 94.
