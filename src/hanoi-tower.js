const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let turns = 2**disksNumber - 1;
  let seconds = Math.floor(turns / (turnsSpeed / 3600));
  
  let object = {'turns' : turns, 'seconds' : seconds};
  return object;
};
