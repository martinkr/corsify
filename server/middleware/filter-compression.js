// /**
//  * @module express-middleware-cors
//  * @description
//  * A simple  express CORS middleware.
//  * Sets the CORS-headers.
//  *
//  * @copyright 2016, 2017 Martin Krause <github@mkrause.info> (http://martinkr.github.io)
//  * @license MIT license: https://opensource.org/licenses/MIT
//  *
//  * @author Martin Krause <github@mkrause.info>
//  *
//  */

// const compression = require("compression");

// module.exports = compressionFilter = (req, res) => {
// 	if (res.getHeader("X-corsify") === "splash") {
// 		res.setHeader("X-corsify", `${res.getHeader("X-corsify")}, gzip`);
// 		// console.log("compression > YES for ", req.url)
// 		// fallback to standard filter function
// 		return compression.filter(req, res)
// 	}
// 	// console.log("compression > NO for ", req.url)
// 	return false

// };