import { NotImplementedError } from "../extensions/index.js";

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
export default function deleteDigit(n) {
  let str = String(n);
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let newnumber = str.slice();
    newnumber = newnumber.split("");
    newnumber.splice(i, 1);
    newnumber = newnumber.join("");
    arr.push(Number(newnumber));
  }
  return Math.max.apply(null, arr);
}
// let str = "152";
// console.log(deleteDigit(152));
