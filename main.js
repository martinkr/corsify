/**
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

// load app
const app = require('./server/main');

// export app for supertest
module.exports = app;

