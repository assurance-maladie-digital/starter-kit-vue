<template>
	<h2>FormBuilder</h2>
	<FormBuilder v-model="form" />
	{{ form }}

	<br/><br/><br/>

	<h2>FormFieldList</h2>
	<FormFieldList v-model="fields" />
	{{ fields }}

	<br/><br/><br/>

	<h2>FormField</h2>
	<FormField v-model="field" />
	{{ field }}
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	FormBuilder,
	FormFieldList,
	FormField
} from "@cnamts/synapse-bridge";

import { Form } from '@cnamts/synapse-bridge/src/form-builder/FormBuilder/types';
import { Fields } from '@cnamts/synapse-bridge/src/form-builder/FormFieldList/types';
import { Field } from '@cnamts/synapse-bridge/src/form-builder/FormField/types';

export default defineComponent({
	components: {
		FormBuilder,
		FormFieldList,
		FormField
	},
	data() {
		return {
			form: {
				informations: {
					title: 'Vos informations',
					questions: {
						nir: {
							type: 'text',
							value: null,
							fieldOptions: {
								label: 'Numéro de Sécurité Sociale',
								variant: 'outlined'
							}
						},
						lastName: {
							type: 'text',
							value: null,
							fieldOptions: {
								label: 'Nom',
								variant: 'outlined',
								color: 'success'
							}
						},
						firstName: {
							type: 'text',
							value: null,
							fieldOptions: {
								label: 'Prénom',
								variant: 'outlined'
							}
						},
						age: {
							type: 'number',
							value: null,
							fieldOptions: {
								label: 'Age',
								variant: 'outlined',
								mask: '###'
							}
						},
						contact: {
							type: 'select',
							dynamic: true,
							items: [
								{
									text: 'Email',
									value: 'email'
								},
								{
									text: 'Courrier',
									value: 'mail'
								},
								{
									text: 'SMS',
									value: 'sms'
								}
							],
							value: null,
							fieldOptions: {
								label: 'Moyen de contact',
								variant: 'outlined'
							}
						}
					},
				},
				health: {
					title: 'Votre état de santé',
					questions: {
						symptoms: {
							type: 'textarea',
							title: 'Vos symptômes',
							description: 'Décrivez les symptômes qui vous affectent et leur ordre d\'apparition.',
							value: null,
							fieldOptions: {
								label: 'Décrivez vos symptômes',
								variant: 'outlined'
							}
						},
						symptomsDate: {
							type: 'date',
							value: null,
							description: 'Date d\'apparition des symptômes',
							fieldOptions: {
								label: 'Date d\'apparition',
								outlined: true
							}
						}
					}
				},
				rating: {
					title: 'Votre état de santé',
					questions: {
						rating: {
							type: 'select',
							items: [
								{
									text: 'médiocre',
									value: 1
								},
								{
									text: 'Moyenne',
									value: 2
								},
								{
									text: 'Bonne',
									value: 3
								},
								{
									text: 'Très bonne',
									value: 4
								}
								,
								{
									text: 'Optimal',
									value: 5
								}
							],
							value: null,
							fieldOptions: {
								type: 'choiceSlider',
								label: 'Etat de santé',
								hideDetails: true,
								thumbLabel: true,
								thumbSize: '20px'
							}
						},
						choice: {
							type: 'select',
							items: [
								{
									text: 'Oui',
									value: 'yes'
								},
								{
									text: 'Non',
									value: 'no'
								}
							],
							value: null,
							fieldOptions: {
								type: 'choiceButton',
								label: 'Avez-vous des antécédents médicaux ?',
							}
						},
						choice2: {
							type: 'select',
							items: [
								{
									text: 'Demangeaison',
									value: 'Demangeaison'
								},
								{
									text: 'Toux',
									value: 'Toux'
								},
								{
									text: 'Fièvre',
									value: 'Fièvre'
								},
								{
									text: 'Maux de tête',
									value: 'Maux de tête'
								},
								{
									text: 'Courbatures',
									value: 'Courbatures'
								},
								{
									text: 'Perte de gout',
									value: 'Perte de gout'
								},
								{
									text: 'Perte d\'odorat',
									value: 'Perte d\'odorat'
								},
								{
									text: 'Difficultés respiratoires',
									value: 'Difficultés respiratoires'
								},
								{
									text: 'Autre',
									value: 'Autre'
								}
							],
							value: null,
							fieldOptions: {
								type: 'choiceAutocomplete',
								label: 'De quoi souffrez vous ?',
								variant: 'outlined'
							}
						}
					}
				}
			} as Form,

			fields: {
				lastName: {
					type: 'text',
					value: null,
					fieldOptions: {
						label: 'Nom',
						variant: 'outlined'
					}
				},
				firstName: {
					type: 'text',
					value: null,
					fieldOptions: {
						label: 'Prénom',
						variant: 'outlined'
					}
				},
				startDate: {
					type: 'date',
					value: null,
					fieldOptions: {
						label: 'Date de début de l’arrêt',
						outlined: true
					}
				}
			} as Fields,

			field: {
				type: 'period',
				value: []
			} as Field
		};
	},
});
</script>
