<template>
	<PasswordField
		v-model="password"
		@update:model-value="getValue($event)"
	/>
	<PasswordField
		v-model="password"
		required
		outlined
		@update:model-value="getValue($event)"
	/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	PasswordField,
} from "@cnamts/synapse-bridge";

export default defineComponent({
	components: {
		PasswordField,
	},
	data() {
		return {
			password: null as string | null
		};
	},
	methods: {
		getValue(value: string): void {
			console.log(value);
		}
	}
});
</script>
