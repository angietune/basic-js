const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let repeatTimes = 1;
  let separator = '';
  let addition = '';
  let additionRepeatTimes = 1;
  let additionSeperator = '';
  str = String(str);
  let add = '';
  let end = '';
  for (let i = 0; i < options.length; i++) {
    if (options[i] == repeatTimes && typeOf(Object.key(options[i] === 'number'))) {
      repeatTimes = Object.key(options[i]);
    } 
    if (options[i] == additionRepeatTimes && typeOf(Object.key(options[i] === 'number'))) {
      additionRepeatTimes = Object.key(options[i]);
    }
    if (options[i] == separator) {
      separator = Object.key(options[i]);
    } else {
      separator = '+';
    }
    if (options[i] == addition) {
      addition = Object.key(options[i]);
      addition = String(addition);
    }
    
    if (options[i] == additionSeperator) {
      additionSeperator = Object.key(options[i]);
    } else {
      additionSeperator = '|';
    }
  }
  if (additionRepeatTimes > 0) {
    add = addition;
    for (let j = 0; j <= additionRepeatTimes; j++ ) {
      add += additionSeperator + addition;
    }
  }
  end = str + add;
  for (let k = 0; k <= repeatTimes; k++) {
    end += separator + str + add;
  }
  return end;
};
  