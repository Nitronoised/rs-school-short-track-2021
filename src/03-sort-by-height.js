/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
const insertItemsInArr = (index, arr) => arr.splice(index, 0, -1);

const formIndexesArr = (acc, item, index) => {
  if (item === -1) acc.push(index);
  return acc;
};

function sortByHeight(arr) {
  const arrLocal = [...arr];

  const minusOneIndexes = arrLocal.reduce(formIndexesArr, []);

  const clearArr = arrLocal
    .filter((num) => num !== -1)
    .sort((a, b) => a - b);

  minusOneIndexes.forEach((item) => insertItemsInArr(item, clearArr));

  return clearArr;
}

module.exports = sortByHeight;
