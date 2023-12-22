const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  throw new NotImplementedError('Not implemented');
  // if (Array.isArray(arr)) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === '--double-prev') {
  //       if (typeof arr[i - 1] !== 'undefined') {
  //         arr[i] = arr[i - 1];
  //       } else {
  //         arr.splice(i, 1);
  //         i = i - 1;
  //       }
  //     }
  //     if (arr[i] === '--discard-prev') {
  //       if (typeof arr[i - 1] !== 'undefined') {
  //         arr.splice(i, 1);
  //         arr.splice(i - 1, 1);
  //         i = i - 2;
  //       } else {
  //         arr.splice(i, 1);
  //         i = i - 1;
  //       }
  //     }
  //     if (arr[i] === '--discard-next') {
  //       if (typeof arr[i + 1] !== 'undefined') {
  //         arr.splice(i, 2);
  //         i = i - 2;
  //       } else {
  //         arr.splice(i, 1);
  //         i = i - 1;
  //       }
  //     }
  //     if (arr[i] === '--double-next') {
  //       if (typeof arr[i + 1] !== 'undefined') {
  //         arr[i] = arr[i + 1];
  //       } else {
  //         arr.splice(i, 1);
  //         i = i - 1;
  //       }
  //     }
  //   }
  //   return arr;
  // } else {
  //   throw new Error('\'arr\' parameter must be an instance of the Array!');
  // }
}

module.exports = {
  transform
};
