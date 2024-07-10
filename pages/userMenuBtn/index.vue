<template>
	<h2>Back Btn</h2>
	<div class="d-flex justify-sm-space-between">
		<BackBtn />
		<VSheet color="primary" class="pa-4">
			<BackBtn dark />
		</VSheet>

		<BackBtn>
			<template #default> Précédent </template>

			<template #icon>
				<VIcon>
					{{ backIcon }}
				</VIcon>
			</template>
		</BackBtn>
	</div>
	<h2>User Menu Btn</h2>
	<div class="d-flex justify-sm-space-between">
		<UserMenuBtn
			additional-information="Information supplémentaire"
			full-name="Virginie Beauchesne"
		/>
		<UserMenuBtn full-name="Édith Cartier">
			<VListItem
				v-for="(item, index) in items"
				:key="index"
			>
				<VListItemTitle>{{ item }}</VListItemTitle>
			</VListItem>
		</UserMenuBtn>
		<br/><br/>
		<UserMenuBtn
			additional-information="Information supplémentaire"
			full-name="Virginie Beauchesne"
			mobile-version
		/>
		<br/><br/>
		<UserMenuBtn
			:vuetify-options="vuetifyOptionsUserMenuBtn"
			full-name="Édith Cartier"
		>
			<VListItem
				v-for="(item, index) in items"
				:key="index"
			>
				<VListItemTitle>{{ item }}</VListItemTitle>
			</VListItem>
		</UserMenuBtn>
	</div>
	<h2>France connect Btn</h2>
	<div class="d-flex justify-sm-space-between">
		<FranceConnectBtn href="https://app.franceconnect.gouv.fr/" />
		<br />
		<FranceConnectBtn
			connect-plus
			href="https://app.franceconnect.gouv.fr/"
		/>
	</div>
	<h2>CopyBtn</h2>
	<div class="d-flex justify-sm-space-between">
	<CopyBtn
		label="Copier le numéro de dossier"
		text-to-copy="example-2"
	/>
		<CopyBtn
			label="Copier le numéro de dossier"
			:text-to-copy="() => 'example-1'"
		/>

		<CopyBtn
			label="Copier le numéro de dossier"
			text-to-copy="example-2"
		/>

		<CopyBtn
			label="Copier le numéro de patient"
			text-to-copy="example-3"
			hide-tooltip
		/>

		<CopyBtn
			:tooltip-duration="5000"
			label="Copier le numéro de patient"
			text-to-copy="example-4"
		/>

		<CopyBtn
			label="Copier le numéro de ticket"
			text-to-copy="example-6"
		>
			<template #icon>
				<VIcon>
					{{ mdiContentDuplicate }}
				</VIcon>
			</template>

			<template #tooltip>
				Le texte a bien été copié
			</template>
		</CopyBtn>

		<CopyBtn
			:vuetify-options="vuetifyOptions"
			label="Copier le numéro d'utilisateur"
			text-to-copy="example-5"
		/>
	</div>

	<h2>SelectBtnField</h2>
	<div class="d-flex justify-sm-space-between">
		<SelectBtnField
			v-model="selectBtnFieldvalue"
			:items="selectBtnFielItems"
			label="Moyen de contact"
			hint="Par défaut, le moyen de contact est l’email."
		/>

		<SelectBtnField
			v-model="selectBtnFieldvalue"
			:items="selectBtnFielItems"
			multiple
			label="Moyen de contact"
		/>

		<SelectBtnField
			v-model="selectBtnFieldvalue"
			:items="selectBtnFielItems"
			inline
			label="Moyen de contact"
		/>
	</div>
	<div class="d-flex justify-left mt-4">
		<SelectBtnField
			v-model="selectBtnFieldvalue"
			:items="selectBtnFielItems"
			v-model:error="error"
			v-model:error-messages="errorMessages"
			label="Moyen de contact"
		/>

		<VBtn
			color="primary"
			class="mt-3"
			@click="resetExample"
		>
			Réinitialiser
		</VBtn>
	</div>

	<h2>DownloadBtn</h2>
	<div class="d-flex justify-sm-space-between"></div>

	<h2>LangBtn</h2>
	<div class="d-flex justify-sm-space-between"></div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { mdiContentDuplicate, mdiChevronLeft } from "@mdi/js";
import {
	BackBtn,
	FranceConnectBtn,
	CopyBtn,
	BackToTopBtn,
	UserMenuBtn,
	SelectBtnField,
	DownloadBtn,
	LangBtn,
} from "@cnamts/synapse-bridge";

import { SelectBtnItem } from '@cnamts/synapse-bridge/src/patterns/SelectBtnField/types';

export default defineComponent({
	components: {
		UserMenuBtn,
		BackBtn,
		FranceConnectBtn,
		CopyBtn,
		BackToTopBtn,
		SelectBtnField,
		DownloadBtn,
		LangBtn,
	},
	data() {
		return {
			backIcon:mdiChevronLeft,
			items: [
				'Administration',
				'Profil',
				'Paramètres'
			],
			vuetifyOptions: {
				menu: {
					location: 'bottom center',
					offset: 2
				},
				btn: {
					density: 'default'
				},
				icon: {
					color: 'indigo'
				}
			},
			vuetifyOptionsUserMenuBtn: {
				menu: {
					minWidth: '264px',
					maxWidth: '264px'
				},
				btn: {
					variant: 'outlined',
				},
				icon: {
					color: 'primary'
				},
				logoutIcon: {
					class: 'd-none'
				}
			},
			selectBtnFieldvalue: [] as string[] | null,
			selectBtnFielItems: [
				{
					text: 'Email',
					value: 'email'
				},
				{
					text: 'Courrier',
					value: 'courrier'
				},
				{
					text: 'SMS',
					value: 'sms'
				},
				{
					text: 'Autre',
					value: 'other',
					unique: true
				}
			] as SelectBtnItem[],
			error: true
		}
	},
	computed: {
	},
	methods: {
		resetExample(): void {
			this.selectBtnFieldvalue = null;
			this.error = true;
			this.errorMessages = ['Le champ est requis.'];
		}
	}
});
</script>
