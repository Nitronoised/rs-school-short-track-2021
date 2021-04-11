/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s2Local = s2;

  return s1.split('').reduce((commonAmount, letter) => {
    let commonAmountLocal = commonAmount;

    if (s2Local.includes(letter)) {
      s2Local = s2Local.replace(letter, '');
      commonAmountLocal++;
    }

    return commonAmountLocal;
  }, 0);
}

module.exports = getCommonCharacterCount;
