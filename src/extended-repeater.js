import { NotImplementedError } from "../extensions/index.js";

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  str = String(str);
  let addition;
  let additionRepeatTimes;
  let repeatTimes;
  let separator;
  let additionSeparator;

  if (typeof options.addition == "undefined") {
    addition = "";
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
    separator = "+";
  } else {
    separator = String(options.separator);
  }

  if (typeof options.additionSeparator == "undefined") {
    additionSeparator = "|";
  } else {
    additionSeparator = String(options.additionSeparator);
  }

  let add = "";
  let end = "";

  if (additionRepeatTimes > 0) {
    add = addition;
    for (let i = 1; i < additionRepeatTimes; i++) {
      add += additionSeparator + addition;
    }
  }

  end = str + add;
  for (let i = 1; i < repeatTimes; i++) {
    end += separator + str + add;
  }
  return end;
}
