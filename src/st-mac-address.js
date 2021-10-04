import { NotImplementedError } from "../extensions/index.js";

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  function check(str) {
    let re = /[G-Z]/g;
    if (str.search(re) === -1) return true;
    else return false;
  }
  let arr = n.split("-");
  if (arr.length != 6) return false;
  return arr.every((el) => {
    console.log(el.length, check(el));
    return el.length === 2 && check(el);
  });
}
console.log(isMAC48Address("00-1B-F3-84-54-E6"));
