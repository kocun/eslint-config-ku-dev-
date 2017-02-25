'use strict';

module.exports = {
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    node: true,
    es6: true,
    mocha: true
  },
  plugins: ['promise', 'mocha'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-cond-assign': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'error',
    'no-empty': ['error', {
      allowEmptyCatch: true
    }],
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'use-isnan': 'error',
    'valid-typeof': ['error', {
      requireStringLiterals: true
    }],
    'no-unexpected-multiline': 'error',
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'complexity': 'warn',
    'curly': 'error',
    'default-case': 'error',
    'dot-notation': 'error',
    'dot-location': ['error', 'property'],
    'eqeqeq': 'error',
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal-escape': 'error',
    'no-octal': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-return-assign': ['error', 'always'],
    'no-script-url': 'error',
    'no-self-assign': ['error', {
      props: true
    }],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-void': 'error',
    'no-warning-comments': 'warn',
    'no-with': 'error',
    'radix': 'error',
    'wrap-iife': ['error', 'inside'],
    'yoda': 'error',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': ['error', 'event'],
    'no-shadow-restricted-names': 'error',
    'no-undef-init': 'error',
    'no-undef': ['error', {
      typeof: true
    }],
    'no-unused-vars': 'error',
    'no-use-before-define': ['error', 'nofunc'],

    'handle-callback-err': 'warn',
    'no-mixed-requires': ['error', {
      grouping: true,
      allowCall: true
    }],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-restricted-imports': ['error',
      'domain',
      'freelist',
      'smalloc',
      'sys',
      'colors'
    ],
    'no-restricted-modules': ['error',
      'domain',
      'freelist',
      'smalloc',
      'sys',
      'colors'
    ],
    'array-bracket-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs', {
      allowSingleLine: false
    }],
    'comma-spacing': ['error', {
      before: false,
      after: true
    }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'eol-last': 'error',
    'func-call-spacing': ['error', 'never'],
    'func-names': ['error', 'never'],
    'jsx-quotes': 'error',
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true
    }],
    'keyword-spacing': 'error',
    'linebreak-style': ['error', 'unix'],
    'max-depth': 'warn',
    'max-nested-callbacks': ['warn', 4],
    'max-params': ['warn', {
      max: 4
    }],
    'max-statements-per-line': 'error',
    'new-cap': ['error', {
      newIsCap: true,
      capIsNew: true
    }],
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': ['error', {
      max: 1
    }],
    'no-nested-ternary': 'warn',
    'no-negated-condition': 'error',
    'no-new-object': 'error',
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-whitespace-before-property': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'object-curly-spacing': ['error', 'never'],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': 'error',
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', {
      allowTemplateLiterals: true
    }],
    'semi-spacing': ['error', {
      before: false,
      after: true
    }],
    'semi': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-']
      },
      block: {
        markers: ['!'],
        balanced: true
      }
    }],
    'unicode-bom': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error', {
      before: true,
      after: true
    }],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', 'both'],
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': ['error', {
      includeExports: true
    }],
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': ['error', 'both'],
    'indent': [2, 2, {
      SwitchCase: 1
    }],
    'space-before-function-paren': [2, 'never'],
    'valid-jsdoc': [2, {
      requireReturn: false,
      prefer: {
        returns: 'return'
      }
    }],
    'require-jsdoc': 1,
    'max-len': [1, 80, 4, {
      ignoreComments: true,
      ignoreUrls: true
    }],
    'camelcase': ['error', {
      properties: 'never'
    }],
    'promise/param-names': 'error',
    'promise/always-return': 'error',
    'promise/catch-or-return': 'error',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-skipped-tests': 'error',
    'mocha/no-pending-tests': 'error',
    'mocha/handle-done-callback': 'error',
    'mocha/no-synchronous-tests': 'error',
    'mocha/no-global-tests': 'error',
    'mocha/no-return-and-callback': 'error',
    'mocha/no-sibling-hooks': 'error',
    'mocha/no-mocha-arrows': 'off',
    'mocha/no-hooks': 'off',
    'mocha/no-hooks-for-single-case': 'error',
    'mocha/no-top-level-hooks': 'error',
    'mocha/no-identical-title': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'no-confusing-arrow': ['error', {
      allowParens: true
    }],
    'no-var': 'error',
    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true
    }],
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true
    }],
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true
    }],
    'prefer-reflect': 'warn',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'sort-imports': ['off', {
      ignoreCase: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
    }]
  }

};
