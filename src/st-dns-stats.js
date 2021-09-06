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
  const s = {};
  for (let i = 0; i < domains.length; i++) {
    let last = 0;
    let sd = "";
    let d = "";
    for (let j = domains[i].length; j > -1; j--) {
      last = j;
      j = domains[i].lastIndexOf(".", j);
      if (j > -1) sd = domains[i].substring(j, last + 1);
      else sd = `.${domains[i].substring(0, last + 1)}`;
      d += sd;
      if (typeof s[d] === "undefined") s[d] = 1;
      else s[d]++;
    }
  }
  return s;
}
