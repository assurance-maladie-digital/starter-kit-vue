<template>
	<div>
		<hr class="mt-16">
		<v-icon icon="mdi-home-outline" />
		<v-btn variant="tonal" color="primary" class="ml-5"> Button </v-btn>
		<ContentDoc />
		<TestComponent />

		<PageContainer>
			<VCard class="pa-8">
				Contenu de la page.
			</VCard>
		</PageContainer>
		<PageContainer size="m">
			<VCard class="pa-8">
				Contenu de la page.
			</VCard>
		</PageContainer>
	</div>
</template>

<script setup lang="ts">
import {PageContainer} from 'bridge-david';
</script>
