import { NotImplementedError } from "../extensions/index.js";

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  const res = [];
  let pos = 0;
  let n = "";
  let f = 0;
  let j = 0;
  for (let i = 0; i < names.length; i++) {
    n = names[i];
    pos = res.indexOf(n);
    if (pos === -1) res.push(n);
    // first
    else {
      j = 1;
      f = res.indexOf(`${n}(${j})`);
      while (f > -1) {
        // try inc file name
        j++;
        f = res.indexOf(`${n}(${j})`);
      }
      res.push(`${n}(${j})`);
    }
  }
  return res;
}
