import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
	files: ['**/*.{js,ts,vue}'],
	ignores: ['.config/*', 'cypress/**/*', 'cypress.config.js'],
	rules: {
		'vue/html-self-closing': 'off',
		'vue/multi-word-component-names': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
	},
})
