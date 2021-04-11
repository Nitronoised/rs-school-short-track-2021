/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let remainder = n;
  let sum = 0;

  while (remainder > 9) {
    sum += remainder % 10;
    remainder = Math.floor(remainder / 10);
  }
  sum += remainder;

  return sum < 10 ? sum : getSumOfDigits(sum);
}

module.exports = getSumOfDigits;
