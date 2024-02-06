;import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

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
	})
	app.vueApp.use(vuetify);
})
