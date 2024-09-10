<template>
	<h2>FormBuilder</h2>
	<FormBuilder v-model="form" />
	<pre>{{ form }}</pre>

	<br/><br/><br/>

	<h2>FormFieldList</h2>
	<FormFieldList
		v-model="fields"
		list-title="Votre état de santé"
		description="Vos symptômes et leur date d’apparition."
	/>
	<pre>{{ fields }}</pre>

	<br/><br/><br/>

	<h2>FormField</h2>
	<FormField v-model="field" />
	<pre>{{ field }}</pre>
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

			/*field: {
				type: 'text',
				value: null,
				fieldOptions: {
					label: 'Votre nom',
					hideDetails: true,
					variant: 'outlined'
				}
			} as Field*/

			/*field: {
				type: 'textarea',
				title: 'Vos symptômes',
				description: 'Décrivez les symptômes qui vous affectent et leur ordre d’apparition.',
				value: null,
				fieldOptions: {
					label: 'Décrivez vos symptômes',
					hideDetails: true,
					variant: 'outlined'
				}
			} as Field*/

			/*field: {
				type: 'number',
				value: null,
				fieldOptions: {
					label: 'Votre âge',
					hideDetails: true,
					variant: 'outlined',
					mask: '###'
				}
			} as Field*/

			/*field: {
				type: 'password',
				value: null,
				fieldOptions: {
					label: 'Votre mot de passe',
					hideDetails: true,
					variant: 'outlined'
				}
			} as Field*/

			/*field: {
				type: 'date',
				value: null,
				fieldOptions: {
					label: 'Votre date de naissance',
					variant: 'outlined',
				}
			} as Field*/

			/*field: {
				type: 'period',
				value: [],
			} as Field*/

			/*field: {
				type: 'range',
				min: 0,
				max: 100,
				value: null,
				fieldOptions: {
					variant: 'outlined',
				}
			} as Field*/

			/*field: {
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
					hideDetails: true,
					variant: 'outlined'
				}
			} as Field*/

			/*field:  {
				type: 'select',
				items: [
					{
						text: '1 an',
						value: 1
					},
					{
						text: '2 ans',
						value: 2
					},
					{
						text: '3 ans',
						value: 3
					},
					{
						text: '4 ans',
						value: 4
					}
				],
				value: null,
				fieldOptions: {
					type: 'choiceSlider',
					label: 'Durée',
					hideDetails: true
				}
			} as Field*/

			/*field: {
				type: 'select',
				items: [
					{
						text: '1 an',
						value: 1
					},
					{
						text: '2 ans',
						value: 2
					},
					{
						text: '3 ans',
						value: 3
					},
					{
						text: '4 ans',
						value: 4
					}
				],
				value: null,
				fieldOptions: {
					type: 'choiceSlider',
					label: 'Durée',
					hideDetails: true,
					thumbLabel: true,
					thumbSize: '36px'
				}
			} as Field*/

			/*field: {
				type: 'select',
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
					type: 'choiceButton',
					label: 'Moyen de contact',
					hideDetails: true,
					outlined: true
				}
			} as Field*/

			/*field: {
				type: 'select',
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
					},
					{
						text: 'Autre',
						value: 'other'
					}
				],
				value: null,
				other: {
					label: 'Saisir autre moyen de contact',
					selectedChoice: 'other'
				},
				fieldOptions: {
					type: 'choiceButton',
					label: 'Moyen de contact',
					hideDetails: true,
					outlined: true
				}
			} as Field*/

			field: {
				type: 'select',
				multiple: true,
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
					},
					{
						text: 'Autre',
						value: 'other',
						alone: true
					}
				],
				value: null,
				fieldOptions: {
					type: 'choiceButton',
					label: 'Moyen de contact',
					hideDetails: true,
					outlined: true
				}
			} as Field
		};
	},
});
</script>
