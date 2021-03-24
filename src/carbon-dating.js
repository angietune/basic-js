const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string') {
    let num = +sampleActivity;
    if (typeof num === 'number' && !isNaN(num) && num != Infinity && num > 0) {
      num = Math.log(MODERN_ACTIVITY/num)/(0.693/HALF_LIFE_PERIOD);
      if (num > 0) {
      return Math.ceil(num);
      } else {
        return false;
      }
      } else {
      return false;
      }
    } else {
      return false;
    }
};
