import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
	// https://router.vuejs.org/api/interfaces/routeroptions.html#routes
	routes: (_routes) => [
		{
			name: 'index',
			path: '/',
			component: () => import('~/pages/home.vue').then(r => r.default || r)
		},
		{
			name: 'home',
			path: '/home',
			component: () => import('~/pages/home.vue').then(r => r.default || r)
		},
		{
			name: 'tokens',
			path: '/tokens',
			component: () => import('~/pages/tokens.vue').then(r => r.default || r)
		},
		{
			name: 'maintenance',
			path: '/maintenance',
			component: () => import('~/pages/maintenance.vue').then(r => r.default || r)
		},
		{
			name: 'not-found',
			path: '/not-found',
			component: () => import('~/pages/not-found.vue').then(r => r.default || r)
		},
	],
}
