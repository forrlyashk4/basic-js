const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let base = {};
  let addition = {};
  const res = [];

  names.forEach(name => {
    if (typeof addition[name] !== 'undefined') {
      if (typeof base[name] !== 'undefined') {
        base[name] += 1;
        addition[`${name}(${base[name]})`] = true;
        res.push(`${name}(${base[name]})`);
      } else {
        base[name] = 1;
        addition[`${name}(${base[name]})`] = true;
        res.push(`${name}(${base[name]})`);
      }
    } else {
      addition[name] = true;
      base[name] = 0;
      res.push(name);
    }
  })

  return res;
}
module.exports = {
  renameFiles
};
