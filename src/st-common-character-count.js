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
  let s = 0;
  let s1i = 0;
  let s2i = 0;
  const ss = new Set(s1.split(""));
  ss.forEach((i) => {
    s1i = 0;
    s2i = 0;
    for (let j = 0; j < s1.length; j++) {
      if (i === s1[j]) s1i++;
    }
    for (let j = 0; j < s2.length; j++) {
      if (i === s2[j]) s2i++;
    }
    if (s1i > 0 && s2i > 0) s += Math.min(s1i, s2i);
  });
  return s;
}
