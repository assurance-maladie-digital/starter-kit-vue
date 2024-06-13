<template>
	<h1 class="text-primary">{{ $config && $config.public ? $config.public.title : 'Accueil' }}</h1>
	<div class="mt-6 mb-8 d-flex align-center justify-center">
		<VCard width="695" variant="tonal" class="d-flex">
			<img src="/starter-kit.svg" alt="Starter kit"/>
		</VCard>
	</div>
	<h2 class="text-primary">Exemple de composant Nuxt :</h2>
	<HelloWorld :msg="$config && $config.public ? $config.public.message : 'Bonjour'"/>
	<br />
	<h2 class="text-primary">Exemple de composant DS :</h2>
	<BackBtn to="/"/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { BackBtn } from "@cnamts/synapse-bridge";

export default defineComponent({
	components: {
		BackBtn
	}
});
</script>
