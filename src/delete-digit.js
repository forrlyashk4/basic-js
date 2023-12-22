const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = `${n}`.split('');
  let sum = '';
  let newSum = '';
  arr.forEach((num, index, arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (index !== i) {
        newSum += arr[i];
      }
    }
    if (+newSum > +sum) {
      sum = newSum;
    }
    newSum = '';
  })
  return +sum;
}

module.exports = {
  deleteDigit
};
