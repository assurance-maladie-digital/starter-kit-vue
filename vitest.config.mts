import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
	test: {
		environment: 'nuxt',
		coverage: {
			enabled: true,
			provider: 'v8',
			reportsDirectory: './tests/unit/coverage',
			include: [
				'**/components/**',
				'**/pages/**',
			]
		},
		server: {
			deps: {
				inline: [/vuetify.*/]
			}
		},
		silent: true,
		setupFiles: ['./tests/unit/setup.ts']
	},
})
