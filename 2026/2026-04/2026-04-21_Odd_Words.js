/*
freeCodeCamp - Daily Coding Challenges (mes/dia/2026) 

**Odd Words**

Given a string of words, return only the words with an odd number of letters.

- Words in the given string will be separated by a single space.
- Return the words separated by a single space.
*/

function getOddWords(str) {
  const words = str.split(" ");

  return words.filter((word) => word.length % 2 !== 0).join(" ");
}

getOddWords("This is a super good test"); // should return "a super".
getOddWords("one two three four"); // should return "one two three".
getOddWords("banana split sundae with rainbow sprinkles on top"); // should return "split rainbow sprinkles top".
getOddWords("The quick brown fox jumped over the lazy river"); // should return "The quick brown fox the river".
