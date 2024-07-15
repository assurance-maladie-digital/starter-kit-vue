<template>
	<VCard min-height="274px" class="mx-auto overflow-hidden">
		<ExternalLinks :items="links" position="top left" />
		<ExternalLinks :items="links" nudge-top="80px" position="top right" />
		<ExternalLinks :items="links2" btn-text="Afficher pas de données" nudge-top="80px" position="top left" />
	</VCard>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	ExternalLinks,
} from "@cnamts/synapse-bridge";

import { tokens } from '@cnamts/design-tokens';

import type { ExternalLink } from '@cnamts/synapse-bridge/src/elements/ExternalLinks/types';

export default defineComponent({
	components: {
		ExternalLinks,
	},
	data() {
		return {
			appBarColor: tokens.colors.amBlue.lighten97,
			links: [
				{
					href: 'https://ameli.fr/',
					text: 'Ameli'
				},
				{
					href: 'https://espacepro.ameli.fr/',
					text: 'Ameli Pro'
				}
			] as ExternalLink[],
			links2: []
		};
	},
});
</script>
