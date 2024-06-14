<template>
	<h1 class="text-primary">{{ $config && $config.public ? $config.public.title : 'Accueil' }}</h1>
	<h2>Test font color scss</h2>
	<HelloWorld :msg="$config && $config.public ? $config.public.message : 'Bonjour'"/>
	<VBtn color="primary">
		Primary
	</VBtn>
	<VBtn color="secondary">
		secondary
	</VBtn>
	<VBtn color="info">
		Info
	</VBtn>
	<VBtn color="success">
		Success
	</VBtn>
	<VBtn color="warning">
		Warning
	</VBtn>
	<VBtn color="error">
		Error
	</VBtn>
	<VBtn color="accent">
		Accent
	</VBtn>
	<VBtn color="light">
		Light
	</VBtn>
	<VBtn color="dark">
		Dark
	</VBtn>
	<VBtn color="risquePro">
		Risque Pro
	</VBtn>
	<VBtn class="inva">
		Violet inva
	</VBtn>

	<br /><br />

	<SubHeader
		sub-title-text="1 69 08 75 125 456 75"
		title-text="Paul Dupont"
	/>

	<br /><br />

	<v-alert type="success">
		Message de succès
	</v-alert>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {SubHeader} from "@cnamts/synapse-bridge";

export default defineComponent({
	components: {
		SubHeader
	}
});
</script>

<style lang="scss" scoped>
@import '@cnamts/design-tokens/dist/bootstrap-tokens';

// custom styles
h2 {
	color: $vd-am-blue-lighten-60 !important;
}
.warning {
	color: black !important;
}
.dark {
	color: white !important;
}
.inva {
	background-color: $vd-mauve-darken-60 !important;
	color: white;
}
</style>
