import { NotImplementedError } from "../extensions/index.js";

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  let s = String(n);
  let s2 = 0;
  while (s.length > 1) {
    s2 = 0;
    for (let i = 0; i < s.length; i++) {
      s2 += Number(s[i]);
    }
    s = String(s2);
  }
  return s2;
}
