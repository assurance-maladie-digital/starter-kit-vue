<template>
	<CookieBanner
		v-if="active1"
		cookies-route="/cookiesPage"
		@reject="active1 = false"
		@accept="active1 = false"
	/>

	<CookieBanner
		v-if="active2"
		:vuetify-options="vuetifyOptions"
		cookies-route="/cookiesPage"
		@reject="active2 = false"
		@accept="active2 = false"
	/>

	<CookieBanner
		v-if="active3"
		cookies-route="/cookiesPage"
		@reject="active3 = false"
		@accept="active3 = false"
	>
		Ce téléservice utilise des cookies en enregistrant certaines informations lors de votre navigation.
	</CookieBanner>

	<VBtn
		v-if="!active1"
		color="primary"
		@click="active1 = true"
	>
		Réinitialiser 1
	</VBtn>
	<VBtn
		v-if="!active3"
		color="primary"
		@click="active2 = !active2"
	>
		Réinitialiser 2
	</VBtn>
	<VBtn
		v-if="!active3"
		color="primary"
		@click="active3 = !active2"
	>
		Réinitialiser 3
	</VBtn>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	CookieBanner,
} from "@cnamts/synapse-bridge";
import AppHeader from "@/pages/commons/AppHeader.vue";

export default defineComponent({
	components: {
		CookieBanner,
	},
	data() {
		return {
			vuetifyOptions: {
				sheet: {
					elevation: 5
				},
				customizeBtn: {
					variant: 'text',
				},
				rejectBtn: {
					variant: 'outlined',
				},
				acceptBtn: {}
			},
			active1:true,
			active2: false,
			active3: false
		}
	},
});
</script>
