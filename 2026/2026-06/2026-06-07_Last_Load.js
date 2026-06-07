/*
freeCodeCamp - Daily Coding Challenges (2026-06-07) 

**Last Load**

Given the number of scoops of laundry detergent you have remaining and an array of how many scoops you used in each of the previous days, return the number of full days of detergent you have remaining.

Calculate your average daily usage from the usage history and assume that amount of usage each day going forward.

*/

function lastLoadDate(scoops, usage) {
  const sum = usage.reduce((total, quantityUsed) => total + quantityUsed, 0);
  const average = sum / usage.length;

  return Math.floor(scoops / average);
}

lastLoadDate(10, [2, 2, 2, 2, 2, 2, 2]); // should return 5.
lastLoadDate(16, [2, 3, 0, 3, 4, 2, 1]); // should return 7.
lastLoadDate(33, [5, 0, 4, 3, 3, 2]); // should return 11.
lastLoadDate(50, [2, 0, 2, 9, 12, 0, 2]); // should return 12.
lastLoadDate(20, [13, 9, 12, 10, 8]); // should return 1.
