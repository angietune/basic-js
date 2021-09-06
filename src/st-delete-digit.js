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
  const s = String(n);
  let m = 0;
  let ss = 0;
  for (let i = 0; i < s.length; i++) {
    ss = Number(s.substring(0, i) + s.substring(i + 1));
    if (ss > m) m = ss;
  }
  return m;
}
