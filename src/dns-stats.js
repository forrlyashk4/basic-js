const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  domains.forEach(domain => {
    domain = domain.split('.');
    for (let i = domain.length - 1; i >= 0; i--) {
      let dns = '';
      for (let j = domain.length - 1; j >= i; j--) {
        dns = dns + '.' + domain[j];
      }
      if (obj[dns] !== undefined) {
        obj[dns] = obj[dns] + 1;
      } else {
        obj[dns] = 1;
      }
    }
  })
  return obj;
}

module.exports = {
  getDNSStats
};
