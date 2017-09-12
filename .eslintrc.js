
/* eslint-env browser, node */
/* eslint-env browser */
/* eslint-env node */

/* eslint-env es6 */
/* eslint-env node, mocha */

module.exports = {
	"root": true,
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaVersion": 7,
		"ecmaFeatures": {
		"experimentalObjectRestSpread": true
		}
	},
	"env": {
		"node": true,
		"es6": true
	},

	"globals": {

	},

	"rules": {
		"no-undef": "off"
	}
}

// sane
// preserve native functionality
// explicit, readable code
// be as verboose as possible
