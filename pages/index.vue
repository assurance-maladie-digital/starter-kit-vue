<template>
	<HeaderBar
		service-title="Design System"
		service-sub-title="Documentation du Design System"
		:navigation-items="navigationItems"
	/>
	<PageContainer>
		<div>
			<div class="bg-grey-lighten-1">
				<h2>UserMenuBtn</h2>
				<UserMenuBtn
					additional-information="Information supplémentaire"
					full-name="Virginie Beauchesne"
				/>
			</div>
			<div class="py-4">
				<h2>DialogBox</h2>
				<VBtn
					color="primary"
					@click="dialog = true"
				>
					Afficher le composant
				</VBtn>

				<DialogBox
					v-model="dialog"
					width="500px"
					title="Enregistrement"
					@cancel="dialog = false"
					@confirm="dialog = false"
				>
					<p>Souhaitez-vous procéder à l’enregistrement ?</p>
				</DialogBox>
			</div>
			<div class="bg-grey-lighten-1">
				<h2>DataList</h2>
				<DataList :items="dataListItems"></DataList>
			</div>
			<div class="ml-4">
				<h2>DataListGroup</h2>
				<DataListGroup :items="dataListGroupItems"></DataListGroup>
			</div>
			<div class="bg-grey-lighten-1">
				<h2>FooterWrapper</h2>
				<FooterWrapper>
					<VBtn variant="tonal" class="mr-6">
						Mentions légales
					</VBtn>

					<VBtn variant="tonal" class="mr-6">
						CGU
					</VBtn>

					<VBtn variant="tonal" inert>
						Version 1.0.0
					</VBtn>
				</FooterWrapper>
			</div>
			<div class="ml-4">
				<h2>SubHeader</h2>
				<SubHeader
					back-btn-text="Back"
					title-text="Paul Dupont"
					sub-title-text="1 69 08 75 125 456 75"/>
			</div>
			<div class="bg-grey-lighten-1 mt-4">
				<h2>BackBtn</h2>
				<BackBtn/>
			</div>
			<div class="mt-4">
				<h2>France connect Btn</h2>
				<FranceConnectBtn href="https://app.franceconnect.gouv.fr/"/>
			</div>
			<div class="bg-grey-lighten-1 mt-4">
				<h2>CopyBtn</h2>
				<CopyBtn
					label="Copier le numéro de dossier"
					text-to-copy="example-2"
				/>
			</div>
			<div class="mt-4">
				<h2>Logo</h2>
				<Logo/>
			</div>
			<div class="bg-grey-lighten-1 mt-4 my-4">
				<h2>HeaderLoading</h2>
				<HeaderLoading width="300px" height="30px"/>
			</div>
			<div class="mt-4 my-4">
				<h2>BackToTopBtn</h2>
				<BackToTopBtn/>
			</div>
			<div class="bg-grey-lighten-1">
				<h2>CookieBanner</h2>
				<div class="d-flex flex-wrap align-center justify-center">
					<CookieBanner
						v-if="active"
						cookies-route=""
						@reject="active = false"
						@accept="active = false"
					/>

					<VBtn
						v-if="!active"
						color="primary"
						@click="active = true"
					>
						Réinitialiser
					</VBtn>
				</div>
			</div>
			<div class="mt-4 my-4">
				<h2>Logo Brand Section</h2>
				<LogoBrandSection
					service-sub-title="Documentation du Design System"
					service-title="Design System"
				/>
			</div>
			<div class="mt-4 my-4 bg-grey-lighten-1">
				<h2>ChipList</h2>
				<ChipList :items="chipItems"/>
			</div>
			<div class="mt-4 my-4">
				<h2>MaintenancePage</h2>
				<MaintenancePage/>
			</div>
			<div class="mt-4 my-4 bg-grey-lighten-1">
				<h2>NotFoundPage</h2>
				<NotFoundPage/>
			</div>
			<div class="mt-4 my-4">
				<h2>ErrorPage</h2>
				<ErrorPage
					code="500"
					message="La page ne fonctionne pas correctement."
					page-title="Erreur serveur"
				/>
			</div>
			<div class="mt-4 my-4 bg-grey-lighten-1">
				<h2>PasswordField</h2>
				<PasswordField
					v-model="password"
					@update:model-value="getValue($event)"
				/>
			</div>
			<div class="mt-4 my-4">
				<h2>PaginatedTable (données en dur)</h2>
				<PaginatedTable
					:headers="headers"
					:items="peoples"
					:items-per-page="5"
					v-model:options="options"
				/>
			</div>
		</div>
	</PageContainer>
	<FooterBar
		hide-a11y-link
		hide-cgu-link
		hide-cookies-link
		hide-legal-notice-link
		hide-sitemap-link
	>
		<p class="text--secondary mb-0">Contenu supplémentaire.</p>
	</FooterBar>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	PageContainer,
	HeaderBar,
	FooterBar,
	DataList,
	DataListGroup,
	UserMenuBtn,
	DialogBox,
	FooterWrapper,
	SubHeader,
	BackBtn,
	FranceConnectBtn,
	CopyBtn,
	Logo,
	HeaderLoading,
	BackToTopBtn,
	CookieBanner,
	CookiesPage,
	LogoBrandSection,
	ChipList,
	ErrorPage,
	MaintenancePage,
	NotFoundPage,
	PasswordField,
	PaginatedTable
} from "@cnamts/synapse-bridge";

export default defineComponent({
	components: {
		PageContainer,
		HeaderBar,
		FooterBar,
		UserMenuBtn,
		DialogBox,
		DataList,
		DataListGroup,
		FooterWrapper,
		SubHeader,
		BackBtn,
		FranceConnectBtn,
		CopyBtn,
		Logo,
		HeaderLoading,
		BackToTopBtn,
		CookieBanner,
		CookiesPage,
		LogoBrandSection,
		ChipList,
		ErrorPage,
		MaintenancePage,
		NotFoundPage,
		PasswordField,
		PaginatedTable
	},
	data() {
		return {
			active: true,
			dialog: false,
			chipItems: [
				{text: 'Item 1', value: 'item1'},
				{text: 'Item 2', value: 'item2'},
				{text: 'Item 3', value: 'item3'},
			],
			navigationItems: [
				{
					label: 'Error Page'
				},
				{
					label: 'Mes projets'
				},
				{
					label: 'Mes outils'
				}
			],
			dataListItems: [
				{
					key: 'Nom',
					value: 'Dupont',
				},
				{
					key: 'Prénom',
					value: 'Paul',
				},
				{
					key: 'Date de naissance',
					value: '24/09/1970',
				},
			],
			dataListGroupItems: [
				{
					title: 'Informations patient',
					items: [
						{
							key: 'Nom',
							value: 'Dupont',
							icon: 'accountIcon',
							chip: true
						},
						{
							key: 'Prénom',
							value: 'Paul',
							icon: 'accountIcon'
						},
						{
							key: 'Date de naissance',
							value: '24/09/1970',
							icon: 'calendarIcon',
							action: 'Modifier'
						}
					]
				},
				{
					title: 'Médecin traitant',
					items: [
						{
							key: 'Nom du praticien',
							value: 'Gérard Leblanc',
							icon: 'doctorIcon'
						},

						{
							key: 'N° RPPS',
							value: 'XXXXX',
							icon: 'cardAccountIcon'
						}
					]
				},
				{
					title: 'Autres informations',
					items: [
						{
							key: 'Dernière modification',
							value: '04/06/2020',
							icon: 'editIcon'
						}
					]
				},
			],
			password: null as string | null,
			options: {},
			headers: [
				{
					title: 'Nom',
					key: 'lastname'
				},
				{
					title: 'Prénom',
					key: 'firstname'
				},
				{
					title: 'Email',
					key: 'email'
				}
			],

			peoples: [
				{
					firstname: 'Virginie',
					lastname: 'Beauchesne',
					email: 'virginie.beauchesne@example.com'
				},
				{
					firstname: 'Simone',
					lastname: 'Bellefeuille',
					email: 'simone.bellefeuille@example.com'
				},
				{
					firstname: 'Étienne',
					lastname: 'Salois',
					email: 'etienne.salois@example.com'
				},
				{
					firstname: 'Bernadette',
					lastname: 'Langelier',
					email: 'bernadette.langelier@example.com'
				},
				{
					firstname: 'Agate',
					lastname: 'Roy',
					email: 'agate.roy@example.com'
				},
				{
					firstname: 'Louis',
					lastname: 'Denis',
					email: 'louis.denis@example.com'
				},
				{
					firstname: 'Édith',
					lastname: 'Cartier',
					email: 'edith.cartier@example.com'
				},
				{
					firstname: 'Alphonse',
					lastname: 'Bouvier',
					email: 'alphonse.bouvier@example.com'
				},
				{
					firstname: 'Eustache',
					lastname: 'Dubois',
					email: 'eustache.dubois@example.com'
				},
				{
					firstname: 'Rosemarie',
					lastname: 'Quessy',
					email: 'rosemarie.quessy@example.com'
				}
			]
		}
	},
	methods: {
		getValue(value: string): void {
			console.log(value);
		}
	}
});
</script>
