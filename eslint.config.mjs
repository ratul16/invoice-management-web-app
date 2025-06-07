// eslint.config.mjs
import antfu from '@antfu/eslint-config'
import configPrettier from 'eslint-config-prettier/flat'
import pluginPrettier from 'eslint-plugin-prettier'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // 0) Top‑level ignore block
  {
    ignores: [
      '.github/**',
      '**/*.md',
      '**/*.markdown',
      '**/*.txt',
      '**/*.json',
      '**/*.yml',
      '**/*.yaml',
      '**/*.toml',
      '**/*.lock',
      './package.json',
      './eslint.config.mjs'
    ],
  },

  // 1) Your Antfu preset
  antfu({ formatters: true, pnpm: false }),

  // 2) Disable conflicting rules
  configPrettier,

  // 4) JS/Vue linting overrides
  {
    files: ['**/*.{js,vue}'],
    plugins: { prettier: pluginPrettier },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-duplicate-imports': 'error',
      'no-undef': 'off',
      // 'semi': ['off', 'always'],
      'no-extra-semi': 'off',
      'vue/no-required-prop-with-default': 'off',
      'vue/eqeqeq': ['error', 'smart'],
      'vue/max-len': ['warn', {
        code: 100,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreHTMLAttributeValues: true,
        ignoreTemplateLiterals: true,
        ignorePattern: '^\\s*<[^>]+>',
      }],
      'vue/html-indent': ['error', 2, { attribute: 1, baseIndent: 1 }],
      'vue/max-attributes-per-line': ['warn', { singleline: 3, multiline: 1 }],
      'vue/html-self-closing': ['error', {
        html: { void: 'never', normal: 'always', component: 'always' },
        svg: 'always',
        math: 'always',
      }],
      'vue/component-tags-order': ['error', { order: ['script', 'template', 'style'] }],
      'vue/attribute-hyphenation': ['error', 'always', { ignore: [] }],
      // 'vue/component-name-in-template-casing':
      //   ['warn', 'PascalCase', { registeredComponentsOnly: true, ignores: [] }],
      'vue/no-unused-components': 'off',

    },
  },
)
  // 5) remove any unwanted preset rules
  .removeRules(
    'no-labels',
    'no-lone-blocks',
    'no-restricted-syntax',
    'node/prefer-global/buffer',
    'node/prefer-global/process',
    'prefer-rest-params',
    'symbol-description',
    'ts/ban-types',
    'ts/no-empty-object-type',
    'ts/no-invalid-this',
    'ts/no-unnecessary-type-constraint',
    'vue/no-template-shadow',
    'vue/no-v-text-v-html-on-component',
    'vue/component-tags-order',
    'vue/singlequote-html-element-content-newline',
  )
