<template>
	<VSheet
		:height="height"
		class="vd-logo-brand-section d-flex"
	>
		<component
			:is="logoContainerComponent"
			:aria-current-value="null"
			:aria-label="locales.homeLinkLabel"
			:to="homeLink"
			:href="homeHref"
			class="vd-home-link"
		>
			<Logo
				:hide-signature="hideSignature"
				:risque-pro="isRisquePro"
				:avatar="avatar"
				:size="logoSize"
				:mobile-version="mobileVersion"
				:class="{ 'mr-2': avatar }"
			/>
		</component>

		<slot>
			<svg
				v-if="showDivider"
				:width="dividerDimensions.width"
				:height="dividerDimensions.height"
				:fill="dividerColor"
				role="img"
				focusable="false"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 22 64"
				class="vd-divider"
			>
				<path d="M14.3 49.3c-.2 0-.4-.2-.4-.4V14.2c0-.2.2-.4.4-.4.3 0 .5.2.5.4v34.7c0 .2-.2.4-.5.4Z" />
			</svg>

			<component
				:is="secondaryLogoCtnComponent"
				v-if="secondaryLogo"
				:aria-current-value="null"
				:aria-label="secondaryLogoLabel"
				:to="homeLink"
				:href="homeHref"
				class="vd-home-link"
			>
				<img
					:src="secondaryLogo.src"
					:alt="secondaryLogo.alt"
				>
			</component>

			<div
				v-else-if="showBrandContent"
				class="vd-title-container d-flex justify-center flex-column primary--text"
			>
				<slot name="brand-content">
					<h1
						v-if="service.title"
						:class="{ 'vd-compte-entreprise-title': isCompteEntreprise }"
						class="vd-title text-caption text-md-subtitle-1 font-weight-medium"
					>
						<template v-if="isCompteEntreprise">
							{{ service.title.text }}
							<span>{{ service.title.highlight }}</span>
						</template>

						<template v-else>
							{{ service.title }}
						</template>
					</h1>

					<h2
						v-if="showServiceSubTitle"
						class="vd-title text-caption"
					>
						{{ service.subTitle }}
					</h2>
				</slot>
			</div>
		</slot>
	</VSheet>
</template>

<script setup lang="ts">
	import { reactive, computed, PropType } from 'vue';

	// import { tokens } from '@cnamts/design-tokens';

	// import { LogoSizeEnum } from '../../elements/Logo/LogoSizeEnum';

	import { ThemeEnum } from '../../constants/enums/ThemeEnum';
	import { Dimensions, Next } from '../../types';

	import { LogoInfo, Service } from './types';
	import { locales } from './locales';
	import { secondaryLogoMapping } from './secondaryLogoMapping';
	import { dividerDimensionsMapping } from './dividerDimensionsMapping';

	/** Define a local interface since Nuxt isn't a dependency */
	interface MaybeNuxtInstance extends Vue {
		/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
		$nuxt: any;
	}

	const props = defineProps({
		theme: {
			type: String as PropType<ThemeEnum>,
			default: ThemeEnum.DEFAULT
		},
		serviceTitle: {
			type: String,
			default: undefined
		},
		serviceSubTitle: {
			type: String,
			default: undefined
		},
		mobileVersion: {
			type: Boolean,
			default: false
		},
		reduceLogo: {
			type: Boolean,
			default: false
		},
		homeLink: {
			type: [String, Boolean, Object] as PropType<Next>,
			default: '/'
		},
		homeHref: {
			type: String,
			default: undefined
		}
	});

</script>

<style lang="scss" scoped>
	.vd-logo-brand-section {
		.vd-title-container {
			overflow: hidden;
		}

		.vd-title {
			line-height: 1.45 !important;
		}

		.vd-compte-entreprise-title {
			font-weight: 700 !important;

			span {
				color: #cd545b;
			}
		}

		:deep(img) {
			width: auto;
			height: 100%;
			flex: none;
		}

		svg,
		.vd-home-link {
			flex: none;
		}
	}
</style>
