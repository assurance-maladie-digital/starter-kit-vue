<template>
	<VApp>
		<AppHeader/>
		<PageContainer>
			<slot />
		</PageContainer>
		<FooterBar
			hide-a11y-link
			hide-cgu-link
			hide-cookies-link
			hide-legal-notice-link
			hide-sitemap-link
		>
			<p class="text-secondary mb-0">Contenu supplémentaire.</p>
		</FooterBar>
	</VApp>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PageContainer, HeaderBar, FooterBar } from '@cnamts/synapse-bridge'
import AppHeader from "~/pages/commons/AppHeader.vue";

export default defineComponent({
	components: {
		AppHeader,
		PageContainer,
		HeaderBar,
		FooterBar,
	},
})
</script>
