import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let dep = 1;
    let innerarr = arr.find((item) => Array.isArray(item));
    if (innerarr) {
      let thisarr = arr.flat();
      return (dep += this.calculateDepth(thisarr));
    } else {
      return dep;
    }
  }
}
