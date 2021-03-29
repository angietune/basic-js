const CustomError = require("../extensions/custom-error");

module.exports = function transform(/* arr */) {
  if (!Array.isArray(arr)) {
    throw Error;
  }
  let arr1 = [];
  let tr = true;
  arr.forEach(function (item, i) {
     if (item === '--discard-next') { 
      tr = false;
    } else if (item === '--discard-prev') { 
      newArray.pop();
    } else if (item === '--double-next') {  
      if (i < arr.length - 1) {
        arr1.push(arr[i + 1]);
      }
    } else if (item === '--double-prev') { 
      if (i > 0) {
        arr1.push(arr[i - 1]);
      }
    } else if (tr) {
      arr1.push(item);
    } else {
      tr = true;
    }
  });
  return arr1;
};
