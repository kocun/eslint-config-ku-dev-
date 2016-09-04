A fork of the ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the [Google style](http://google.github.io/styleguide/javascriptguide.xml) with extra ES6, Promise, and Mocha rules for use with Koc University projects.

## Install

```
$ npm install --save-dev eslint eslint-config-ku-dev
```

## Usage

Add some ESLint config to your `package.json`:

```json
{
	"scripts": {
		"lint": "eslint ."
	},
	"devDependencies": {
		"eslint": "^3.4.0",
		"eslint-config-ku-dev": "^0.1.0"
	},
	"eslintConfig": {
		"extends": "ku-dev"
	}
}
```

Then lint with `$ npm run lint`.

