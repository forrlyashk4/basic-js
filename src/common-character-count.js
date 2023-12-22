const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (typeof s1 !== 'string' || typeof s2 !== 'string') return false;

  const s1Map = new Map();
  s1.split('').forEach(letter => {
    if (s1Map.has(letter)) {
      s1Map.set(letter, (s1Map.get(letter) + 1))
    } else {
      s1Map.set(letter, 1);
    }
  })

  const s2Map = new Map();
  s2.split('').forEach(letter => {
    if (s2Map.has(letter)) {
      s2Map.set(letter, (s2Map.get(letter) + 1))
    } else {
      s2Map.set(letter, 1);
    }
  })

  let counter = 0;

  for (let key of s1Map.keys()) {
    console.log(key);
    if (s2Map.has(key)) {
        if (s1Map.get(key) > s2Map.get(key)) {
            counter += s2Map.get(key);
        }
        if (s1Map.get(key) < s2Map.get(key)) {
            counter += s1Map.get(key);
        }
        if (s1Map.get(key) == s2Map.get(key)) {
            counter += s1Map.get(key);
        }
    }
  }

  return counter;
}

module.exports = {
  getCommonCharacterCount
};
