import { NotImplementedError } from "../extensions/index.js";

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

export default function countCats(matrix) {
  let arr = matrix.flat();
  let count = arr.reduce((accum, element) => {
    if (element === "^^") return (accum = accum + 1);
    else return (accum = accum + 0);
  }, 0);
  return count;
}
// console.log(
//   countCats([
//     [0, 1, "^^"],
//     [0, "^^", 2],
//     ["^^", 1, 2],
//   ])
// );
