import js from '@eslint/js'
import globals from 'globals'
import pluginReact from 'eslint-plugin-react'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
	globalIgnores(['.next/**/*'], 'Ignore Build Directory'),
	{
		files: ['**/*.{js,mjs,cjs,jsx}'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: { globals: globals.browser },
		rules: {
			'no-unused-vars': [
				'error',
				{
					vars: 'all',
					args: 'after-used',
					ignoreRestSiblings: true,
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrors: 'none'
				}
			],
			'no-undef': 'warn',
			'react/react-in-jsx-scope': 'off',
			'no-self-assign': 'warn',
			'no-irregular-whitespace': 'warn',
			'no-empty-pattern': ['warn', { allowObjectPatternsAsParameters: true }],
			'no-var': 'warn'
		}
	},
	{
		...pluginReact.configs.flat.recommended,
		settings: {
			react: {
				version: 'detect'
			}
		},
		 rules: {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/no-unescaped-entities': 'off',
      'react/react-in-jsx-scope': 'off',
    }
	}
])
