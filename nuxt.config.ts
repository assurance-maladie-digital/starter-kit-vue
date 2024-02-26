import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import Components from 'unplugin-vue-components/vite'

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
		"@nuxt/test-utils/module"
	],
	vite: {
		vue: {
			template: {
				transformAssetUrls,
			},
		},
		// change the component dirs to match our project layout
		plugins: [Components({ dts: true, dirs: ["./components"]})],
	},

	css: [
		"bridge-david/style.css",
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
