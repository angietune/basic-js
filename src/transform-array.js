const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  }
  let arr1 = [];
  let tr = true;
  let next = 0;
  arr.forEach(function (item, i, arr) {
      if (item === '--discard-next') { 
      tr = false;
      next = i + 1;
    } else if (item === '--discard-prev') { 
      if (next == 0) arr1.pop();
    } else if (item === '--double-next') {  
        if (i < arr.length - 1) {
          arr1.push(arr[i + 1]);
          //next = i + 1;
        }
    } else if (item === '--double-prev') { 
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
  //console.log(arr[0]);
  //console.log(arr1[0]);
  return arr1;
  
};
