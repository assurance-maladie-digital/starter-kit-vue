<template>
	<ErrorPage
		code="500"
		message="La page ne fonctionne pas correctement."
		page-title="Erreur serveur"
		btn-route="/"
	/>

	<ErrorPage
		page-title="Page non trouvée"
		message="Il semblerait qu’il y ait eu une erreur !"
		code="404"
		no-btn
	/>

	<ErrorPage
		code="404"
		page-title="Page non trouvée"
		message="Cette page n’existe pas ou a été déplacée."
		btn-route="/"
	/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
	ErrorPage,
} from "@cnamts/synapse-bridge";

export default defineComponent({
	components: {
		ErrorPage,
	},
	data() {
		return {
		}
	},
	computed: {
	},
	methods: {
	}
});
</script>
