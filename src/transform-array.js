import { NotImplementedError } from "../extensions/index.js";

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error(`'arr' parameter must be an instance of the Array!`);
  }
  let arr1 = [];
  let tr = true;
  let next = 0;
  arr.forEach(function (item, i, arr) {
    if (item === "--discard-next") {
      tr = false;
      next = i + 1;
    } else if (item === "--discard-prev") {
      if (next == 0) arr1.pop();
    } else if (item === "--double-next") {
      if (i < arr.length - 1) {
        arr1.push(arr[i + 1]);
        //next = i + 1;
      }
    } else if (item === "--double-prev") {
      if (i > 0) {
        if (next == 0) arr1.push(arr[i - 1]);
      }
    } else if (tr) {
      arr1.push(item);
      if (i > next) next = 0;
    } else {
      tr = true;
    }
  });
  return arr1;
}
