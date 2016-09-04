'use strict';

module.exports = {

  extends: 'google',

  env: {
    es6: true,
    node: true,
    mocha: true
  },

  plugins: [
    'promise',
    'mocha'
  ],

  rules: {
    // camelcase properties conflict with elasticsearch
    // set in the Google rules, disable
    'camelcase': ['error', {properties: 'never'}],

    // promise rules
    // Enforce standard parameter names for Promise constructors
    'promise/param-names': 'error',

    // Ensure that inside a then() you make sure to return a new promise or value.
    'promise/always-return': 'error',

    // Ensure that each time a then() is applied to a promise, a catch() is applied
    // as well. Exceptions are made if you are returning that promise.
    'promise/catch-or-return': 'error',

    // mocha rules
    // disallow exclusive mocha tests
    'mocha/no-exclusive-tests': 'error',

    // disallow skipped mocha tests (fixable)
    'mocha/no-skipped-tests': 'error',

    // disallow pending/unimplemented mocha tests
    'mocha/no-pending-tests': 'error',

    // enforces handling of callbacks for async tests
    'mocha/handle-done-callback': 'error',

    // disallow synchronous tests
    'mocha/no-synchronous-tests': 'error',

    // disallow global tests
    'mocha/no-global-tests': 'error',

    // disallow returning in a test or hook function that uses a callback
    'mocha/no-return-and-callback': 'error',

    // disallow duplicate uses of a hook at the same level inside a describe
    'mocha/no-sibling-hooks': 'error',

    // disallow arrow functions as arguments to mocha globals
    'mocha/no-mocha-arrows': 'error',

    // disallow hooks for a single test or test suite
    'mocha/no-hooks-for-single-case': 'error',

    // disallow top-level hooks
    'mocha/no-top-level-hooks': 'error',

    // disallow identical titles
    'mocha/no-identical-title': 'error',

    // airbnb ES6 rules
    // enforces no braces where they can be omitted
    // http://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': ['error', 'as-needed'],

    // disallow arrow functions where they could be confused with comparisons
    // http://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': ['error', {
      allowParens: true
    }],

    // require let or const instead of var
    'no-var': 'error',

    // require method and property shorthand syntax for object literals
    // http://eslint.org/docs/rules/object-shorthand
    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true
    }],

    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true
    }],

    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true
    }],

    // suggest using Reflect methods where applicable
    // http://eslint.org/docs/rules/prefer-reflect
    'prefer-reflect': 'warn',

    // use rest parameters instead of arguments
    // http://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',

    // suggest using the spread operator instead of .apply()
    // http://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',

    // suggest using template literals instead of string concatenation
    // http://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',

    // import sorting
    // http://eslint.org/docs/rules/sort-imports
    'sort-imports': ['off', {
      ignoreCase: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
    }]
  }
};
