<script setup lang="ts">
import useFetchTodo from '@/services/useFetchTodo'

definePageMeta({
	validate: async (route) => {
		return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
	}
})

const id = useRoute().params.id as string

const { data, status, error } = useFetchTodo(id)
</script>

<template>
	<div>
		<div v-if="status === 'pending'">Loading...</div>

		<div v-else-if="status === 'error'">
			<h1>An error occurred</h1>
			{{ error }}
		</div>

		<div v-else-if="status === 'success'">
			<h1 class="mb-4">Tache : {{ data.title }}</h1>
			<p class="mb-8">{{ data.completed ? 'Cette tache a été complété avec succès' : 'Cette tache doit toujours être effectuée' }}</p>

			<div class="d-flex justify-end">
				<VBtn color="primary" @click="$router.push(`/fetchData/${data.id + 1}`)">Tache suivante</VBtn>
			</div>
		</div>


	</div>
</template>

<style lang="scss" scoped></style>
