<template>
	<VLayout>
		<AppHeader />
		<slot />
		<AppFooter />
	</VLayout>
</template>

<style scoped>
.v-layout {
	flex-direction: column;
}
</style>
