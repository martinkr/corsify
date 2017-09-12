/**
 * @module server/express-cors
 * @description
 * A express script for setting the CORS headers.
 * Sets the CORS-headers.
 *
 * @copyright 2016, 2017 Martin Krause <github@mkrause.info> (http://martinkr.github.io)
 * @license MIT license: https://opensource.org/licenses/MIT
 *
 * @author Martin Krause <github@mkrause.info>
 *
 */

const headers = [
	{
		"key": "Access-Control-Allow-Origin",
		"value": "*"
	},
	{
		"key": "Access-Control-Allow-Headers",
		"value": "Origin, X-Requested-With, Content-Type, Accept"
	}
];

/**
 * Returns a curried function for setting request headers.
 * @memberof module:server/express-cors
 * @param {Array} headers the headers to set
 * @returns {Function} a curried function for setting request headers.
 */
const setHeaders = (headers) => (res) => headers.forEach((item) => res.header(item.key, item.value));

/**
 * The curried function for setting request headers.
 * @memberof module:server/express-cors
 * @param {Object} the request object to pass down
 * @returns {undefined} undefined
 */
const setCORSHeaders = setHeaders(headers);


/**
 * The api funtion for setting the CORS headers
 * @memberof module:server/express-cors
 * @param {Object} req the request object
 * @param {Object} res the response object
 * @param {Function} next the callback for continuing then middleware chain
 * @returns {*} undefined
 */
const api = (req, res) => {
	// set the headers on the request
	setCORSHeaders(res);
	return true;
};

module.exports = api;