/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const getMinNum = (arr) => arr.reduce((min, num) => Math.min(min, +num), Infinity);

  const nArr = n.toString().split('');
  const minIndex = nArr.indexOf(getMinNum(nArr).toString());
  nArr.splice(minIndex, 1);

  return +nArr.join('');
}

module.exports = deleteDigit;
