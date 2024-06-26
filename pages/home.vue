<template>
	<h1 class="text-primary">{{ $config && $config.public ? $config.public.title : 'Accueil' }}</h1>
	<div class="mt-6 mb-12 d-flex align-center justify-center">
		<VCard width="695" variant="tonal" class="d-flex">
			<img src="/starter-kit.svg" alt="Starter kit"/>
		</VCard>
	</div>
	<v-row justify="center">
		<v-col
			cols="12"
			md="4"
		>
			<v-card
				color="grey-lighten-4"
				class="mx-auto"
			>
				<v-card-title>
					Exemple de composant Nuxt
				</v-card-title>
				<v-card-item>
					<HelloWorld :msg="$config && $config.public ? $config.public.message : 'Bonjour'"/>
				</v-card-item>
			</v-card>
		</v-col>
		<v-col
			cols="12"
			md="4"
		>
			<v-card
				color="grey-lighten-4"
				class="mx-auto"
			>
				<v-card-title>
					Exemple de composant DS
				</v-card-title>
				<v-card-item>
					<BackBtn to="/home" />
					<br /><br />
					<a href="https://digital-design-system.netlify.app/demarrer/introduction/" target="_blank">
						Voir la documentation des composants du Design System.
					</a>
				</v-card-item>
			</v-card>
		</v-col>
		<v-col>
			<v-card
				color="grey-lighten-4"
				class="mx-auto"
			>
				<v-card-title>
					Test du store
				</v-card-title>
				<v-card-item>
					<div v-if="showNotificationBar1">Notification: {{ notificationStore.notificationPayload }}</div>
					<div class="d-flex flex-wrap align-center justify-center ma-n2">
						<v-btn @click="createNotification" class="ma-2">Créer une notification</v-btn>
						<v-btn @click="removeNotification" class="ma-2">Supprimer une notification</v-btn>
					</div>
				</v-card-item>
			</v-card>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { BackBtn, NotificationBar } from "@cnamts/synapse-bridge";
import { useMainStore, useNotificationStore } from "@/store";

export default defineComponent({
	components: {
		BackBtn,
		NotificationBar
	},
	data() {
		return {
			showNotificationBar1: true
		}
	},
	setup() {
		const mainStore = useMainStore();
		const notificationStore = useNotificationStore();

		return {
			mainStore,
			notificationStore,
		};
	},
	methods: {
		createNotification() {
			const payload = {
				message: 'Notification de test',
				type: 'success'
			};
			this.notificationStore.create(payload);
		},
		removeNotification() {
			this.notificationStore.remove();
		}
	}
});
</script>
