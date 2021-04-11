/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const findDomainsRegexp = /@([^@])+/g;
  const domains = [...email.matchAll(findDomainsRegexp)];
  return domains.pop()[0].slice(1);
}

module.exports = getEmailDomain;
