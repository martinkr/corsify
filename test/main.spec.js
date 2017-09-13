/**
 * specs for corsify
 * A tiny transparent proxy. The benefit: it adds the CORS-headers!
 * Why? It prevents Cross Domain Errors.
 *
 * http://localhost:3000/http://google.com
 *
 *
 * @copyright 2016, 2017 Martin Krause <github@mkrause.info> (http://martinkr.github.io)
 * @license MIT license: https://opensource.org/licenses/MIT
 *
 * @author Martin Krause <github@mkrause.info>
 */


const app = require("./../main.js")
const supertest = require("supertest")(app);

describe('the corsify service', () => {

	describe('sends correct HTTP-Status codes', () => {

		it("should respond with 200 if there's no destination", (done) => {
			supertest
				.get("/")
				.expect(200)
				.end(done);
		});

		it("should respond with 200 if there's an invalid destination", (done) => {
			supertest
				.get("/invalid")
				.expect(200)
				.end(done);
		});

	});


	describe("delivers the correct content", () => {

		it("should serve the splash page if there's no destination", (done) => {
			supertest
				.get("/")
				.expect(/<title>corsify.me<\/title>/)
				.expect((res) => {
					if (!res.headers['access-control-allow-origin'] || res.headers['access-control-allow-origin'] !== "*") {
						throw new Error("access-control-allow-origin not present");
					}
					if (!res.headers['access-control-allow-headers'] || res.headers['access-control-allow-headers'] !== "Origin, X-Requested-With, Content-Type, Accept") {
						throw new Error("access-control-allow-headers not present");
					}
				})
				.end(done);
		});

		it("should serve the splash page if there's an invalid destination", (done) => {
			supertest
				.get("/invalid")
				.expect(/<title>corsify.me<\/title>/)
				.expect((res) => {
					if (!res.headers['access-control-allow-origin'] || res.headers['access-control-allow-origin'] !== "*") {
						throw new Error("access-control-allow-origin not present");
					}
					if (!res.headers['access-control-allow-headers'] || res.headers['access-control-allow-headers'] !== "Origin, X-Requested-With, Content-Type, Accept") {
						throw new Error("access-control-allow-headers not present");
					}
				})
				.end(done);
		});

		it("should serve the proxied content with the CORS header if there's a destination", (done) => {
			supertest
				.get("/http://shaky-library.surge.sh")
				.expect(/shaky-library/)
				.expect((res) => {
					if (!res.headers['access-control-allow-origin'] || res.headers['access-control-allow-origin'] !== "*") {
						throw new Error("access-control-allow-origin not present");
					}
					if (!res.headers['access-control-allow-headers'] || res.headers['access-control-allow-headers'] !== "Origin, X-Requested-With, Content-Type, Accept") {
						throw new Error("access-control-allow-headers not present");
					}
				})
				.end(done);
		}).timeout(5000);

	});

	describe('is performant', () => {

		it("should use GZIP for all requests", (done) => {
			supertest
				.get("/")
				.set("Accept-Encoding", "gzip, deflate, br")
				.expect("content-encoding", "gzip")
				.end(done);
		});
	});

});