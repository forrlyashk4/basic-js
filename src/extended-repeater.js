const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {
  let res = '';
  if (!options.separator) options.separator = '+';
  if (!options.repeatTimes && str) options.repeatTimes = '1';
  if (!options.additionRepeatTimes && options.addition) options.additionRepeatTimes = '1';
  if (options.additionRepeatTimes && options.addition && !options.additionSeparator) options.additionSeparator = '|';
  for (let i = 0; i < options.repeatTimes; i++) {
    if (i === 0) {
      res += str;
    } else {
      res += options.separator + str;
    }
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      if (j === 0) {
        res += options.addition;
      } else {
        if (options.additionSeparator) {
          res += options.additionSeparator + options.addition;
        } else {
          res += options.addition
        }
      }
    }
  }
  return res;
}

module.exports = {
  repeater
};
