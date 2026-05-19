/*
freeCodeCamp - Daily Coding Challenges (2026-05-17) 

**Mongo ID Date**

Given a MongoDB ID string, return its creation time as an ISO 8601 string.

- A MongoDB ID is a 24-character hex string. The first 8 characters represent a Unix timestamp (in seconds) encoded as a base-16 integer.

For example, "6a094b50bcf86cd799439011" has a timestamp of "6a094b50" in hex, which is 1778994000 in decimal, representing a creation time of "2026-05-17T05:00:00.000Z".
*/

function mongoIdToDate(id) {
  const hexadecimal = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };

  let decimal = 0;

  let index = 7;

  for (const char of id.slice(0, 8)) {
    if (/[a-f]/i.test(char)) {
      decimal += hexadecimal[char] * 16 ** index;
    } else {
      decimal += char * 16 ** index;
    }
    index--;
  }

  console.log(`decimal = ${decimal}`);

  return new Date(decimal * 1000).toISOString();
}

mongoIdToDate("6a094b50bcf86cd799439011"); //  should return "2026-05-17T05:00:00.000Z".
mongoIdToDate("695344eb1f4a4c1123042128"); //  should return "2025-12-30T03:20:11.000Z".
mongoIdToDate("386da62df34123ac54617e56"); //  should return "2000-01-01T07:01:01.000Z".
mongoIdToDate("69f571c3d7711807afd3dd55"); //  should return "2026-05-02T03:38:43.000Z".
mongoIdToDate("68adce01c0e1144d0a90295a"); //  should return "2025-08-26T15:08:49.000Z".
