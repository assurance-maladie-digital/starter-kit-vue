import { aliases, mdi } from 'vuetify/iconsets/mdi';

export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@invictus.codes/nuxt-vuetify', '@nuxt/content', '@pinia/nuxt'],
	vuetify: {
		/* vuetify options */
		vuetifyOptions: {
			icons: {
				defaultSet: 'mdi',
				aliases,
				sets: {
					mdi,
				},
			},
		},

		moduleOptions: {
			/* nuxt-vuetify module options */
			treeshaking: true,
			useIconCDN: true,

			/* vite-plugin-vuetify options */
			styles: true,
			autoImport: true,
			importLabComponents: true,
		},
	},

	imports: {
		dirs: ['./stores'],
	},

	pinia: {
		autoImports: ['defineStore', 'acceptHMRUpdate'],
	},
});
