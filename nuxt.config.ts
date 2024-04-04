import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
	ssr: false,
	runtimeConfig: {
		public: {
			title: process.env.TITLE,
			message: process.env.MESSAGE
		}
	},
	devtools: { enabled: true },
	modules: [
		"@nuxt/content",
		"dayjs-nuxt",
		"@pinia/nuxt",
		"@nuxt/test-utils/module"
	],
	build: {
		transpile: ["vuetify"],
	},
	vite: {
		vue: {
			template: {
				transformAssetUrls,
			},
		},
		// change the component dirs to match our project layout
		plugins: [
			vuetify(),
			Components({ dts: true, dirs: ["./components"]})
		],
	},
	css: [
		"@cnamts/synapse-bridge/style.css",
		"~/assets/styles/index.scss"
	],
	imports: {
		dirs: ["./stores"],
	},
	dayjs: {
		locales: ["en", "fr"],
		plugins: ["relativeTime", "utc", "timezone"],
		defaultLocale: "fr",
		defaultTimezone: "Europe/Paris",
	},
	pinia: {
		autoImports: ["defineStore", "acceptHMRUpdate"],
	},
});
