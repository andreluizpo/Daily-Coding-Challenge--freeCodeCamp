/*
freeCodeCamp - Daily Coding Challenges (mes/dia/2026) 

**Number Words**

Given an integer from 0 to 99, return its English word representation.

- 0 returns "zero".
- Numbers 1-19 have unique names ("one", "two", ..., "ten", "eleven", ..., "eighteen", "nineteen").
- Multiples of 10 from 20-90 have their own names ("twenty", "thirty", ..., "eighty", "ninety").
- Numbers 21-99 that are not multiples of 10 are written as two words joined by a hyphen. For example "forty-two" and "fifty-three".

*/

function getNumberWords(n) {
  const numbers1_19 = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  const multiplesOf10 = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  if (n < 0 || n > 99) return "O número deve estar entre 0 e 99.";

  if (n <= 19) {
    return numbers1_19[n];
  } else if (n % 10 === 0) {
    return multiplesOf10[Math.floor(n / 10)];
  } else {
    return multiplesOf10[Math.floor(n / 10)] + "-" + numbers1_19[n % 10];
  }
}

getNumberWords(0); // should return "zero".
getNumberWords(10); // should return "ten".
getNumberWords(19); // should return "nineteen".
getNumberWords(30); // should return "thirty".
getNumberWords(53); // should return "fifty-three".
getNumberWords(7); // should return "seven".
getNumberWords(12); // should return "twelve".
getNumberWords(60); // should return "sixty".
getNumberWords(67); // should return "sixty-seven".
getNumberWords(98); // should return "ninety-eight".

// ---------------------------------- TESTES -----------------------------------------------------------

import { runTests } from "../../runTests.js";

const tests = [
  // Repita conforme o número de testes
  { input: [0], expected: "zero" },
  { input: [10], expected: "ten" },
  { input: [19], expected: "nineteen" },
  { input: [30], expected: "thirty" },
  { input: [53], expected: "fifty-three" },
  { input: [7], expected: "seven" },
  { input: [12], expected: "twelve" },
  { input: [60], expected: "sixty" },
  { input: [67], expected: "sixty-seven" },
  { input: [98], expected: "ninety-eight" },
];

runTests(tests, getNumberWords);
