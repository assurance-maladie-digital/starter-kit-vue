import {colorTheme} from "@cnamts/design-tokens/src/colors";
import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
	ssr: true,
	runtimeConfig: {
		public: {
			title: process.env.TITLE,
			message: process.env.MESSAGE,
			theme: process.env.THEME,
		}
	},
	devtools: { enabled: true },
	modules: [
		"vuetify-nuxt-module",
		"@nuxtjs/i18n",
		"dayjs-nuxt",
		"@pinia/nuxt",
	],
	vuetify: {
		vuetifyOptions: {
			icons: {
				defaultSet: 'mdi-svg',
			},
			theme: {
				defaultTheme: 'light',
				themes: {
					light: {
						colors: colorTheme,
					},
				},
			},
		},
	},
	build: {
		transpile: ["vuetify", "@cnamts/synapse-bridge", "@cnamts/design-tokens"],
	},
	vite: {
		// change the component dirs to match our project layout
		plugins: [
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
