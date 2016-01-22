var upperCase = require('upper-case')
var sentenceCaseStrings = require('sentence-case-without-digits')

/**
 * constant case a string.
 *
 * @param  {String} str
 * @param  {String} [locale]
 * @return {String}
 */
module.exports = function (str, locale) {
  return upperCase(sentenceCaseStrings(str, locale, '_'), locale)
}
