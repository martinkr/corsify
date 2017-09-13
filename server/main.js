/**
 * @module server/main
 * @description
 * corsify
 * A tiny transparent proxy. The benefit: it adds the CORS-headers!
 * Why? It prevents Cross Domain Errors.
 *
 * @example
 *  Run $ yarn && yarn start, afterwards  go to http://localhost:3000/
 *
 * http://localhost:3000/http://google.com
 *
 *
 * @copyright 2016, 2017 Martin Krause <github@mkrause.info> (http://martinkr.github.io)
 * @license MIT license: https://opensource.org/licenses/MIT
 *
 * @author Martin Krause <github@mkrause.info>
 */

// setup

// change if you like
// const port = 3000;
// heroku :(
const port =
	/* istanbul ignore next  */
	process.env.PORT ||
	/* istanbul ignore next  */
	3000;

const express = require("express")
const app = express();

const request = require("request");
const mustacheExpress = require("mustache-express");

// middleware
const cors = require("./express-cors");
const cleanurl = require("./express-cleanurl");
const compression = require("compression");
// const compressionFilter = require("./middleware/filter-compression");

// setup mustache for express
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");

// setup gzip compression for all items
app.use(compression({
	// "threshold": 0
	// ,"filter": compressionFilter,
}));


/**
 * Renders the splash page.
 * @memberof module:server/main
 * @param  {object} res response object
 * @returns  {object} res response object
 */
const renderSplash = ((res) => {
	res
		.status(200)
		// .header("X-corsify", "splash")
		.render("index.mustache");
	return res;
});


/**
 * Setup the default route for adding the CORS header
 * @memberof module:server/main
 * @param	{object} req  request object
 * @param  {object} res response object
 * @return {*}  the original request's cotnent
 */
app.use("/", (req, res) => {

	// eslint-disable-next-line no-console
	// console.log(`[corsify] ${new Date().toUTCString()} - new request for ${req.url}`);

	// rewrite url
	req.url = cleanurl(req.url);

	// set CORS headers
	cors(req, res);

	// if (req.url === "supertest") {
	// 	return res.send("ok");
	// }

	// no location
	if (!req.url || req.url === "/") {
		return renderSplash(res);
	}
	try {
		// try to proxy the request
		return req.pipe( request( req.url ) ).pipe(res);
	}
	catch (error) {
		// invalid request
		return renderSplash(res);
	}

});


// start server
app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`[corsify] listening on port ${port} while NODE_ENV is set to ${process.env.NODE_ENV}`);
});

// export app for supertest
module.exports = app;