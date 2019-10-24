/* eslint-disable no-unused-vars */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
};
const decimalToFraction = {
  1: 10,
  2: 100,
  3: 1000,
  4: 10000,
}

const toEnglish = function (digits) {
  // separate decimal part for later
  let decimalPart;
  if (digits % 1 !== 0) {
    decimalPart = (digits + '').split('.')[1];
    decimalPart += '/' + decimalToFraction[decimalPart.length];
    digits = Math.floor(digits);
  }
  if (numbersToWords[digits]) {
    return numbersToWords[digits];
  }
  if (numbersToPlace[digits]) {
    return numbersToPlace[digits];
  }
  if (digits < 100) {
    const numberFloorOf10 = Math.floor(digits / 10) * 10;
    const leftOver = digits % 10;
    return numbersToWords[numberFloorOf10] + '-' + numbersToWords[leftOver];
  }
  let place;
  if (digits < 1000) {
    place = 100;
  } else {
    place = 1000;
  }

  while (digits / place > 1000) {
    place *= 1000;
  }
  const numberFloorOfPlace = Math.floor(digits / place);
  let leftOver = digits % place;
  return toEnglish(numberFloorOfPlace) + ' ' + numbersToPlace[place] + (leftOver > 0 ? ' ' + toEnglish(leftOver) : '') + (decimalPart ? ` and ${decimalPart}` : '');
};
let result = toEnglish(97);
console.log('english', result);
result = toEnglish(597);
console.log('english', result);
result = toEnglish(1597);
console.log('english', result);
result = toEnglish(61597);
console.log('english', result);
result = toEnglish(615.97);
console.log('english', result);
result = toEnglish(999999999.97);
console.log('english', result);