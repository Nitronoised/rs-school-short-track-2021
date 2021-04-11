/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const checks = {
    checkUp: (row, col) => matrix[row - 1][col] === true,
    checkDown: (row, col) => matrix[row + 1][col] === true,
    checkLeft: (row, col) => matrix[row][col - 1] === true,
    checkRight: (row, col) => matrix[row][col + 1] === true,
    checkUpRight: (row, col) => matrix[row - 1][col + 1] === true,
    checkUpLeft: (row, col) => matrix[row - 1][col - 1] === true,
    checkDownRight: (row, col) => matrix[row + 1][col + 1] === true,
    checkDownLeft: (row, col) => matrix[row + 1][col - 1] === true,
  };

  const getMinesAmount = (row, col) => Object.values(checks).reduce((mines, checkFunc) => {
    let minesLocal = mines;
    try {
      if (checkFunc(row, col)) minesLocal++;
    } catch (err) {
      return minesLocal;
    }
    return minesLocal;
  }, 0);

  return matrix.reduce((finalArr, row, rowIndex) => {
    finalArr.push(row.reduce((rowArr, _, colIndex) => {
      rowArr.push(getMinesAmount(rowIndex, colIndex));
      return rowArr;
    }, []));
    return finalArr;
  }, []);
}

module.exports = minesweeper;
