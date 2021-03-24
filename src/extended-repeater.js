const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  
  if (typeof options.addition == "undefined") {
    addition = ''; 
  } else {
    addition = String(options.addition); 
  }    
  
  if (typeof options.additionRepeatTimes == "undefined") {
    additionRepeatTimes = 1; 
  } else {
    additionRepeatTimes = options.additionRepeatTimes; 
  }  
  
  if (typeof options.repeatTimes == "undefined") {
    repeatTimes = 0; 
  } else {
    repeatTimes = options.repeatTimes; 
  }  
  
  if (typeof options.separator == "undefined") {
    separator = '+'; 
  } else {
    separator = String(options.separator); 
  }

  if (typeof options.additionSeparator == "undefined") {
    additionSeparator = '|'; 
  } else {
    additionSeparator = String(options.additionSeparator); 
  }

  let add = '';
  let end = '';
    
  if (additionRepeatTimes > 0) {
    add = addition;
    for (let i = 1; i < additionRepeatTimes; i++) {
      add += additionSeparator + addition
    }
  }

  end = str + add;
  for (let i = 1; i < repeatTimes; i++) {
      end += separator + str + add;
  }
  return end;
};
  