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
  const domainsMap = {};

  const addToMap = (item) => {
    if (domainsMap[item]) {
      domainsMap[item]++;
    } else {
      domainsMap[item] = 1;
    }
  };

  const handleGroup = (group) => {
    group.reduce((str, item) => {
      let strLocal = str;
      strLocal += `.${item}`;
      addToMap(strLocal);
      return strLocal;
    }, '');
  };

  const analyzeDomain = (domain) => {
    const splittedDomain = domain.split('.').reverse();
    handleGroup(splittedDomain);
  };

  domains.forEach(analyzeDomain);
  return domainsMap;
}

module.exports = getDNSStats;
