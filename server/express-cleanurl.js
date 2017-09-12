/**
 * @module server/express-cleanurl
 * @description
 * A simple  express script for cleaning up urls.
 * The script ensures that there's no empty response.
 *
 * @copyright 2016, 2017 Martin Krause <github@mkrause.info> (http://martinkr.github.io)
 * @license MIT license: https://opensource.org/licenses/MIT
 *
 * @author Martin Krause <github@mkrause.info>
 *
 */

/**
 * Recursive cleaning of the string
 * @param {String} string the string to clean
 * @returns {String} the cleaned string
 */
const cleanUrl = (string) => {
	// if it's only a "/", keep it
	if (string.startsWith("/") && string.length > 1) {
		string = cleanUrl(string.slice(1));
		return string;
	} else {
		return string;
	}
};

module.exports = cleanUrl;