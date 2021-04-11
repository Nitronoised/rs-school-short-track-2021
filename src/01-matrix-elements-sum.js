/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

const isItemBelowZero = (skippColumnsIndexes, itemIndex) => skippColumnsIndexes.includes(itemIndex);

function getMatrixElementsSum(matrix) {
  const skippColumnsIndexes = [];
  let sum = 0;

  matrix.forEach((row) => {
    row.forEach((item, index) => {
      if (!isItemBelowZero(skippColumnsIndexes, index)) sum += item;
      if (item === 0) skippColumnsIndexes.push(index);
    });
  });

  return sum;
}

module.exports = getMatrixElementsSum;
