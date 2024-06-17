import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
	ssr: false,
	runtimeConfig: {
		public: {
			title: process.env.TITLE,
			message: process.env.MESSAGE,
			theme: process.env.THEME,
		}
	},
	devtools: { enabled: true },
	modules: [
		'@nuxtjs/i18n',
		"dayjs-nuxt",
		"@pinia/nuxt",
	],
	plugins: [
		'~/plugins/axios.ts',
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
