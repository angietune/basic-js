//const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let dep = 1;
    let innerarr = arr.find(item => Array.isArray(item));
    if (innerarr) {
      let thisarr = arr.flat();
      return dep += this.calculateDepth(thisarr);
    } else {
      
      return dep;
    }
  }
};