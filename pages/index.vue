<template>
	<PageContainer>
		<ChipList :items="[{text: 'toto', value: 'toto'}]" />
		<FranceConnectBtn href="https://app.franceconnect.gouv.fr/" />
	</PageContainer>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {PageContainer, ChipList, FranceConnectBtn} from "@cnamts/synapse-bridge";
export default defineComponent({
	components: {
		PageContainer,
		ChipList,
		FranceConnectBtn,
	}
});
</script>
