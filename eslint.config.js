import antfu from '@antfu/eslint-config'

export default antfu(
  {
    // Enable stylistic formatting rules
    stylistic: {
      indent: 2,
      quotes: 'single',
    },

    typescript: {
      tsconfigPath: 'tsconfig.json',
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
    // Disable jsonc and yaml support
    jsonc: true,
    yaml: true,
  },
  {
    ignores: [
      '*.js',
      // '!.*'
    ],
  },
  {
    files: ['**/*.ts', '.cron/**/*.ts'],
    rules: {
      'ts/no-unsafe-assignment': 'off',
      'ts/no-unsafe-call': 'off',
      'ts/no-unsafe-return': 'off',
      'ts/no-unsafe-member-access': 'off',
      'ts/no-unsafe-argument': 'off',
      'ts/require-await': 'error',
      'ts/no-floating-promises': 'error',
      'ts/no-misused-promises': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'error',
    },
  },
)
