import { NotImplementedError } from "../extensions/index.js";

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  if (arguments.length == 0) return "Unable to determine the time of year!";
  try {
    if (!(date instanceof Date && !isNaN(date.valueOf())))
      throw new Error("Invalid date!");
  } catch {
    throw new Error("Invalid date!");
  }

  switch (date.getMonth() + 1) {
    case 12:
    case 1:
    case 2:
      return "winter";
    case 3:
    case 4:
    case 5:
      return "spring";
    case 6:
    case 7:
    case 8:
      return "summer";
    case 9:
    case 10:
    case 11:
      return "autumn";
  }
}

// const deeperFakeDate = {
//   toString() {
//     return Date.prototype.toString.call(new Date());
//   },
//   getMonth() {
//     return Date.prototype.getMonth.call(new Date());
//   },
//   getFullYear() {
//     return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
//   },
//   getDate() {
//     return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
//   },
//   getHours() {
//     return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
//   },
//   getMinutes() {
//     return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
//   },
//   getSeconds() {
//     return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
//   },
//   getMilliseconds() {
//     return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
//   },
//   getDay() {
//     return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
//   },
//   [Symbol.toStringTag]: "Date",
// };
// const fakeDate = {
//   toString() {
//     return Date.prototype.toString.call(new Date());
//   },
//   [Symbol.toStringTag]: "Date",
// };

// Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));
// console.log(getSeason(fakeDate));
