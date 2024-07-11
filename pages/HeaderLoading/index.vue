<template>
	<HeaderLoading />
	<br />
	<HeaderLoading width="300px" />
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	HeaderLoading,
} from "@cnamts/synapse-bridge";
export default defineComponent({
	components: {
		HeaderLoading,
	},
});
</script>
