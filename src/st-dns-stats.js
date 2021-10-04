import { NotImplementedError } from "../extensions/index.js";

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let obj = {};

  for (let i = 0; i < domains.length; i++) {
    let dotIndex = domains[i].length;
    let words = domains[i].split("."); //dots number
    let name = "";
    for (let j = words.length - 1; j >= 0; j--) {
      let prevName = name;
      name = prevName + `.${words[j]}`;
      if (!obj.hasOwnProperty(name)) obj[name] = 1;
      else obj[name] = obj[name] + 1;
    }
  }
  return obj;
}
//console.log(getDNSStats(["epam.com"]));
