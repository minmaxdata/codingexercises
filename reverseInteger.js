/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (current) {
  let isNegative = current < 0;
  let reversed = 0;
  if (isNegative) {
    current *= -1;
  }
  while (current > 0) {
    reversed = (reversed * 10) + (current % 10);
    current = Math.floor(current / 10);
  }
  if (reversed > 2 ** 31 - 1) {
    return 0;
  }

  return isNegative ? (reversed * -1 : reversed
};