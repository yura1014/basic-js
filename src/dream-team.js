import { NotImplementedError } from "../extensions/index.js";
/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length === 0) return false;
  let arr = members.filter((el) => {
    if (typeof el === "string" && el.length != 0) return true;
    else return false;
  });
  arr = arr.map((el) => {
    return el.trim().split("")[0];
  });
  arr = arr.map((el) => el[0].toUpperCase());
  return arr.sort().join("");
}
// ADGJKMNPRSTW'
// console.log(createDreamTeam(["Amelia", "Grace", "Lily", "Ruby"]));
