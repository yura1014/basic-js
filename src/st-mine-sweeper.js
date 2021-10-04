import { NotImplementedError } from "../extensions/index.js";

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
export default function minesweeper(matrix) {
  let newArr = matrix.map(function (arr) {
    return arr.slice();
  });
  function check(i, j) {
    let count = 0;
    if (
      matrix.hasOwnProperty(i - 1) &&
      matrix[i - 1].hasOwnProperty(j) &&
      matrix[i - 1][j] === true
    )
      count++; //top
    if (
      matrix.hasOwnProperty(i + 1) &&
      matrix[i + 1].hasOwnProperty(j) &&
      matrix[i + 1][j] === true
    )
      count++; //bottom
    if (
      matrix.hasOwnProperty(i) &&
      matrix[i].hasOwnProperty(j + 1) &&
      matrix[i][j + 1] === true
    )
      count++; //left
    if (
      matrix.hasOwnProperty(i) &&
      matrix[i].hasOwnProperty(j - 1) &&
      matrix[i][j - 1] === true
    )
      count++; //right
    if (
      matrix.hasOwnProperty(i + 1) &&
      matrix[i + 1].hasOwnProperty(j + 1) &&
      matrix[i + 1][j + 1] === true
    )
      count++; //bottom right corner
    if (
      matrix.hasOwnProperty(i - 1) &&
      matrix[i - 1].hasOwnProperty(j - 1) &&
      matrix[i - 1][j - 1] === true
    )
      count++; //top left corner
    if (
      matrix.hasOwnProperty(i + 1) &&
      matrix[i + 1].hasOwnProperty(j - 1) &&
      matrix[i + 1][j - 1] === true
    )
      count++; //bottom left corner
    if (
      matrix.hasOwnProperty(i - 1) &&
      matrix[i - 1].hasOwnProperty(j + 1) &&
      matrix[i - 1][j + 1] === true
    )
      count++;
    //top right corner
    return count;
  }
  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[i].length; j++) newArr[i][j] = check(i, j);
  return newArr;
}
// console.log(
//   minesweeper([
//     [false, false, false],
//     [false, false, false],
//   ])
// );
