import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
	test: {
		environment: 'nuxt',
		coverage: {
			enabled: true,
			provider: 'v8',
			reportsDirectory: './coverage',
			include: ['**/components/**']
		},
		server: {
			deps: {
				inline: [/vuetify.*/]
			}
		},
		setupFiles: ['./tests/unit/setup.ts']
	},
})
