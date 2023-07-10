import { defineVitestConfig } from 'nuxt-vitest/config'

export default defineVitestConfig({
	test: {
		globals: true,
		environment: 'happy-dom',
		// you can optionally set nuxt-specific environment options
		// environmentOptions: {
		//   nuxt: {
		//     rootDir: fileURLToPath(new URL('./playground', import.meta.url)),
		//     overrides: {
		//       // other nuxt config you want to pass
		//     }
		//   }
		// }
	},
});
