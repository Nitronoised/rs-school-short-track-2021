/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodedStr = '';
  let seq = [];

  const isNextSame = (string, i) => string[i] === string[i + 1];
  const addSeq = (sequence, string) => {
    let stringLocal = string;
    if (sequence.length === 1) {
      stringLocal += sequence[0];
    } else {
      stringLocal += `${sequence.length}${sequence[0]}`;
    }
    return stringLocal;
  };

  for (let i = 0; i < str.length; i++) {
    seq.push(str[i]);
    if (!isNextSame(str, i)) {
      encodedStr = addSeq(seq, encodedStr);
      seq = [];
    }
  }

  return encodedStr;
}

module.exports = encodeLine;
