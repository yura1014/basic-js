import { NotImplementedError } from "../extensions/index.js";

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
  const obj = {};
  let turn = Math.pow(2, disksNumber) - 1;
  let seconds = Math.floor((3600 * turn) / turnsSpeed);
  obj.turns = turn;
  obj.seconds = seconds;
  return obj;
}
