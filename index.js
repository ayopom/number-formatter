'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @returns {string}
 */
module.exports = function(number, locale) {
  return number.toLocaleString(locale);
};