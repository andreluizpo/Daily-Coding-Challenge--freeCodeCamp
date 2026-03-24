/*
freeCodeCamp - Daily Coding Challenges (03/22/2026) 

**Coffee Roast Detector**

Given a string representing the beans used to make a cup of coffee, determine the roast of the cup.

- The given string will contain the following characters, each representing a type of bean:
  - An apostrophe (') is a light roast bean worth 1 point each.
  - A dash (-) is a medium roast bean worth 2 points each.
  - A period (.) is a dark roast bean worth 3 points each.

- The roast level is determined by the average of all the beans.

Return:
- "Light" if the average is less than 1.75.
- "Medium" if the average is 1.75 to 2.5.
- "Dark" if the average is greater than 2.5.

*/

function detectRoast(beans) {
  let sum = 0;

  for (const bean of beans) {
    if (bean === "'") sum++;
    else if (bean === "-") sum += 2;
    else if (bean === ".") sum += 3;
  }

  const average = sum / beans.length;

  if (average < 1.75) return "Light";
  if (average <= 2.5) return "Medium";
  return "Dark";
}

detectRoast("''-''''''-'-''--''''"); // should return "Light".
detectRoast(".'-''-''..'''.-.-''-"); // should return "Medium".
detectRoast("--.''--'-''.--..-.--"); // should return "Medium".
detectRoast("-...'-......-..-...-"); // should return "Dark".
detectRoast(".--.-..-......----.'"); // should return "Medium".
detectRoast("..-..-..-..-....-.-."); // should return "Dark".
detectRoast("-'-''''''..-'.''-'.'"); // should return "Light".
