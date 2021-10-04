import { NotImplementedError } from "../extensions/index.js";

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
  
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

export default function sortByHeight(arr) {
  let temparr = arr.filter((el) => el != -1);
  temparr.sort((a, b) => {
    return a - b;
  });
  let tempInd = 0;

  arr.forEach((el, index) => {
    if (el == -1) {
      temparr.splice(index, 0, -1);
      tempInd++;
    }
  });
  return temparr;
}
