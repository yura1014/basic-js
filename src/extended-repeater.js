import { NotImplementedError } from "../extensions/index.js";

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (typeof str != "string") str = String(str);
  if (options.hasOwnProperty("addition") && options.addition != "string")
    options.addition = String(options.addition);

  options.separator = options.separator || "+";
  options.additionRepeatTimes = options.additionRepeatTimes || 0;
  options.additionSeparator = options.additionSeparator || "|";
  options.addition = options.addition || "";
  let string = "";
  let additionAdd = options["addition"];
  let i = 1;
  while (i < options["additionRepeatTimes"]) {
    additionAdd += `${options["additionSeparator"]}${options["addition"]}`;

    i++;
  }
  i = 1;
  while (i < options["repeatTimes"]) {
    string += `${options["separator"]}${str}${additionAdd}`;
    i++;
  }

  return `${str}${additionAdd}${string}`;
}
// console.log(repeater("la", { repeatTimes: 3 }));
