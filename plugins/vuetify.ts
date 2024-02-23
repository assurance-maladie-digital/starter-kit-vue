;import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import { colorTheme } from '@cnamts/design-tokens/src/colors';

export default defineNuxtPlugin((app) => {
	const vuetify = createVuetify({
		ssr: true,
		icons: {
			defaultSet: 'mdi',
			aliases: {
				...aliases,
				// Add custom aliases here
			},
			sets: {
				mdi,
			},
		},
		theme: {
			defaultTheme: 'light',
			themes: {
				light: {
					colors: colorTheme,
				},
			},
		},
	})
	app.vueApp.use(vuetify);
})
