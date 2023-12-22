const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let letterPrev = undefined;
  let counter = 0;
  str.split('').forEach(letter => {
    if (letterPrev) {
      if (letterPrev === letter) {
        counter++;
      } else {
        if (counter === 1) {
          res += letterPrev;
        } else {
          res += counter + letterPrev;
        }
        counter = 1;
        letterPrev = letter;
      }
    } else {
      letterPrev = letter;
      counter++;
    }
  })
  if (counter === 1) {
    res += letterPrev;
  } else {
    if (counter !== 0) {
      res += counter + letterPrev;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
