// eslint.config.js

import antfu from '@antfu/eslint-config'

export default antfu({
  // Enable stylistic formatting rules
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },

  // Or customize the stylistic rules

  // Disable jsonc and yaml support
  jsonc: true,
  yaml: true,
  typescript: true,

  // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
},
  // {
  //   root: true,
  //   ignorePatterns: [
  //     '!.*'
  //   ],
  //   parserOptions: {
  //     ecmaVersion: 'latest',
  //     sourceType: 'module',
  //     project: './cron/tsconfig.json'
  //   },
  //   plugins: [
  //     'unicorn'
  //   ],
  //   rules: {
  //     'unicorn/template-indent': [
  //       'warn',
  //       {
  //         tags: [],
  //         functions: [],
  //         selectors: [
  //           'TemplateLiteral'
  //         ]
  //       }
  //     ]
  //   },
  //   globals: {},
  //   overrides: [
  //     {
  //       files: [
  //         '*',
  //         '*.ts',
  //         '*.tsx',
  //         '*.js',
  //         '*.mjs'
  //       ],
  //       rules: {
  //         'template-tag-spacing': [
  //           'error',
  //           'always'
  //         ],
  //         curly: [
  //           'error',
  //           'multi-line'
  //         ],
  //         'no-console': 'error',
  //         '@typescript-eslint/comma-dangle': 'off',
  //         '@typescript-eslint/require-await': [
  //           'error'
  //         ],
  //         '@typescript-eslint/no-floating-promises': [
  //           'error'
  //         ],
  //         '@typescript-eslint/no-misused-promises': [
  //           'error'
  //         ],
  //         'no-multiple-empty-lines': [
  //           'error',
  //           {
  //             max: 1,
  //             maxBOF: 0,
  //             maxEOF: 0
  //           }
  //         ]
  //       }
  //     },
  //     {
  //       files: [
  //         'settings.json',
  //         'deno.json*'
  //       ],
  //       rules: {
  //         'jsonc/sort-keys': [
  //           'error',
  //           'asc',
  //           {
  //             caseSensitive: true,
  //             natural: false,
  //             minKeys: 2
  //           }
  //         ]
  //       }
  //     }
  //   ]
  // }

)

// export default [{
//   extends: '@antfu',
// ]
