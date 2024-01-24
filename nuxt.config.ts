import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";

export default defineNuxtConfig({
	devtools: { enabled: true },
	build: {
		transpile: ["vuetify"],
	},
	modules: [
		(_options, nuxt) => {
			nuxt.hooks.hook("vite:extendConfig", (config) => {
				// @ts-expect-error
				config.plugins.push(vuetify({ autoImport: true }));
			});
		},
		"@nuxt/content",
		"dayjs-nuxt",
		"@pinia/nuxt",
	],
	vite: {
		vue: {
			template: {
				transformAssetUrls,
			},
		},
	},

	css: ["~/assets/styles/index.scss"],

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
