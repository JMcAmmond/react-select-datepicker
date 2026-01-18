// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/react-native',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'progress',
    '@typescript-eslint',
    'import',
    'json',
    'html',
    'jsx-a11y',
    'prettier',
    'unused-imports',
  ],
  env: {
    es6: true,
    node: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 8,
    sourceType: 'module',
    extraFileExtensions: ['.html', '.md', '.json', '.svg', '.tag'],
    project: ['./tsconfig.json'],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'html/html-extensions': ['.html'],
    'import/core-modules': ['enzyme'],
    'import/ignore': ['node_modules'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx', '.mjs', '.d.ts'],
        paths: ['node_modules/', 'node_modules/@types/'],
      },
    },
  },
  overrides: [
    {
      files: ['**/*.tsx', '**/*.ts'],
      rules: {
        'react/require-default-props': 'off',
        'react/prop-types': 'off', // we should use types
        'react/forbid-prop-types': 'off', // we should use types
      },
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        'vars-on-top': 'off',
        'no-var': 'off', // this is how typescript works
        'spaced-comment': 'off',
      },
    },
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['src/stories/**/*.tsx', 'src/stories/**/*.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],

  rules: {
    '@typescript-eslint/lines-between-class-members': 'off',
    'lines-between-class-members': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'progress/activate': 1,
    'class-methods-use-this': 'off',
    'import/default': 'error',
    'import/extensions': [
      'error',
      'never',
      {
        ignorePackages: true,
        json: 'always',
        md: 'always',
        svg: 'always',
        tag: 'always',
      },
    ],
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'examples/**',
          'examples-native/**',
          '**/example/**',
          '*.js',
          '**/*.test.js',
          '**/*.test.ts',
          '**/*.test.tsx',
          '**/*.stories.*',
          '**/scripts/*.js',
          '**/stories/**/*.js',
          '**/stories/**/*.ts',
          '**/stories/**/*.tsx',
          '**/stories/**/*.*',
          '**/__tests__/**/*.js',
          '**/__tests__/**/*.ts',
          '**/__tests__/**/*.tsx',
          '**/.storybook/**/*.*',
        ],
        peerDependencies: true,
      },
    ],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['@storybook'],
      },
    ],
    'import/prefer-default-export': 'off',
    'json/*': ['error', 'allowComments'],
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['A', 'LinkTo', 'Link'],
        specialLink: ['overrideParams', 'kind', 'story', 'to'],
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'warn',
      {
        controlComponents: ['CustomInput'],
        depth: 3,
        labelAttributes: ['label'],
        labelComponents: ['CustomInputLabel'],
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'max-classes-per-file': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash.isequal',
            message:
              'Lodash modularized (and lodash < 4.17.11) have CVE vulnerabilities. Please use tree-shakeable imports like lodash/xxx instead',
          },
          {
            name: 'lodash.uniqueId',
            message:
              'Lodash modularized (and lodash < 4.17.11) have CVE vulnerabilities. Please use tree-shakeable imports like lodash/xxx instead',
          },
          {
            name: 'lodash.mergewith',
            message:
              'Lodash modularized (and lodash < 4.17.11) have CVE vulnerabilities. Please use tree-shakeable imports like lodash/xxx instead',
          },
          {
            name: 'lodash.pick',
            message:
              'Lodash modularized (and lodash < 4.17.11) have CVE vulnerabilities. Please use tree-shakeable imports like lodash/xxx instead',
          },
        ],
        patterns: ['lodash.*'],
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '__STORYBOOK_CLIENT_API__',
          '__STORYBOOK_ADDONS_CHANNEL__',
          '__STORYBOOK_STORY_STORE__',
        ],
      },
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'react/jsx-fragments': 'off',
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowBind: true,
        allowFunctions: true,
        ignoreDOMComponents: true,
        ignoreRefs: true,
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/no-unescaped-entities': 'off',
    'react/sort-comp': [
      'error',
      {
        groups: {
          staticLifecycle: ['displayName', 'propTypes', 'defaultProps', 'getDerivedStateFromProps'],
        },
        order: [
          'staticLifecycle',
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^on.+$/',
          '/^(get|set)(?!(DerivedStateFromProps|SnapshotBeforeUpdate$)).+$/',
          'instance-methods',
          'instance-variables',
          'everything-else',
          'render',
        ],
      },
    ],
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'import/no-default-export': 'error',
    'react/react-in-jsx-scope': 'error',
  },
};
