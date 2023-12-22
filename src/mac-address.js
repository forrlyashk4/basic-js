const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (typeof n !== 'string') return false;

  const splitted = n.split('-');
  if (splitted.length !== 6) return false;
  let isFalse = true;
  splitted.forEach(section => {
    if (section.length !== 2) {
      isFalse = false;
    }
    if (isNaN(+section[0]) && !/^[ABCDEF]/.test(section[0])) {
      isFalse = false;
    }
    if (isNaN(+section[1]) && !/^[ABCDEF]/.test(section[1])) {
      isFalse = false;
    }
  })
  return isFalse;
}
module.exports = {
  isMAC48Address
};
