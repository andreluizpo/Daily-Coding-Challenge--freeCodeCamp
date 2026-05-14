/*
freeCodeCamp - Daily Coding Challenges (05/13/2026) 

**Offending Element**

Given an array of integers that is sorted in ascending order except for one out-of-place element, return the index of that element.

- If more than one element could be considered out of place, return the index of the first one.

*/

function findOffender(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      if (arr[i + 1] < arr[i - 1]) return i + 1;
      return i;
    }
  }
}

findOffender([1, 6, 2, 3, 4, 5]); // should return 1.
findOffender([1, 2, 3, 5, 4, 5]); // should return 3.
findOffender([2, 1]); // should return 0.
findOffender([2, 4, 1, 6, 8]); // should return 2.
findOffender([5, 18, 24, 33, 40, 55, 15, 68, 84, 91]); // should return 6.
