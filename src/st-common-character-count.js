import { NotImplementedError } from "../extensions/index.js";

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split("");
  let arr2 = s2.split("");
  let strObj1 = {};
  let strObj2 = {};
  function fillObj(arr, obj1) {
    arr.forEach((el) => {
      if (!obj1.hasOwnProperty(el)) obj1[el] = 1;
      else obj1[el]++;
    });
  }
  fillObj(arr1, strObj1);
  fillObj(arr2, strObj2);
  let count = 0;
  for (const [key, value] of Object.entries(strObj1)) {
    if (strObj2.hasOwnProperty(key))
      count = count + Math.min(strObj2[key], value);
  }
  return count;
}
//console.log(getCommonCharacterCount("aabcc", "adcaa"));
