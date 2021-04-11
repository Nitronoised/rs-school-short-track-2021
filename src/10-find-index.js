/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const updatePivot = (high, low) => Math.floor((high + low) / 2);

  let low = 0;
  let high = array.length - 1;
  let pivot = updatePivot(high, low);

  while (low <= high) {
    pivot = updatePivot(high, low);
    if (array[pivot] === value) return pivot;
    if (array[pivot] < value) low = pivot + 1;
    if (array[pivot] > value) high = pivot - 1;
  }
  return -1;
}

module.exports = findIndex;
