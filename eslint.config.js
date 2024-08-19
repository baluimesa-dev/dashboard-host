import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { defineConfig } from 'eslint-define-config';

const compat = new FlatCompat({
  baseDirectory: path.resolve(__dirname),
});

export default defineConfig([
  'eslint:recommended',
  {
    files: ['*.ts', '*.tsx'],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      project: './tsconfig.json',
    },
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
    ],
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/prop-types': 'off',
    },
  },

  // React settings
  {
    files: ['*.jsx', '*.tsx'],
    plugins: ['react'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // If using React 17+
    },
  },

  // Prettier integration
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    plugins: ['prettier'],
    extends: ['plugin:prettier/recommended'],
    rules: {
      'prettier/prettier': 'error',
    },
  },
    {
      files: [
        "**/*.test.js"
      ],
      env: {
        jest: true
      }
    }
]);
