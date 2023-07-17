<template>
	<div>
		<VAppBar
			v-bind="{
				...config.appBar,
				...$attrs
			}"
			ref="appBar"
			v-scroll:[targetSelector]="onScroll"
			:height="height"
			:fixed="sticky"
			role="banner"
			class="vd-header-bar transition-ease-in-out"
		>
			<VSheet
				v-bind="config.contentSheet"
				:height="contentSheetHeight"
				:class="spacingClass"
				class="vd-header-bar-content transition-ease-in-out"
			>
				<VSheet
					v-bind="config.innerSheet"
					:width="innerWidth"
				>
					AppHeader
					<!-- <slot name="logo">
						<LogoBrandSection
							v-bind="options.brandSection"
							:theme="theme"
							:service-title="serviceTitle"
							:service-sub-title="serviceSubTitle"
							:mobile-version="isMobileVersion"
							:reduce-logo="sticky && scrolled"
							:home-link="homeLink"
							:home-href="homeHref"
						>
							<template #brand-content>
								<slot name="brand-content" />
							</template>

							<slot name="secondary-logo" />
						</LogoBrandSection>
					</slot>

					<VSpacer
						v-if="showSpacer"
						v-bind="config.spacer"
					/>

					<slot /> -->
				</VSheet>
			</VSheet>
		</VAppBar>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, PropType } from 'vue';
import { useDisplay } from 'vuetify';

import { config } from './config';

import { NavigationItem } from './types';
import { Next, Refs } from '../types';
import { ThemeEnum, THEME_ENUM_VALUES } from '../../constants/enums/ThemeEnum';
import { propValidator } from '../../helpers/propValidator';

const props = defineProps({
	theme: {
		type: String as PropType<ThemeEnum>,
		default: ThemeEnum.DEFAULT,
		validator: (value: string) => propValidator('theme', THEME_ENUM_VALUES, value)
	},
	serviceTitle: {
		type: String,
		default: undefined
	},
	serviceSubTitle: {
		type: String,
		default: undefined
	},
	navigationItems: {
		type: Array as PropType<NavigationItem[]>,
		default: undefined
	},
	innerWidth: {
		type: String,
		default: '100%'
	},
	homeLink: {
		type: [String, Boolean, Object] as PropType<Next>,
		default: undefined
	},
	homeHref: {
		type: String,
		default: undefined
	},
	showNavBarMenuBtn: {
		type: Boolean,
		default: false
	},
	mobileVersion: {
		type: Boolean,
		default: false
	},
	sticky: {
		type: Boolean,
		default: false
	},
	target: {
		type: String,
		default: undefined
	}
});

const { smAndDown } = useDisplay();

const drawer: boolean | null = ref(null);
const tab: number | null = ref(null);
const scrolled = ref(false);

const isMobileVersion = computed(() => {
	if (props.mobileVersion) {
		return true;
	}

	return smAndDown;
});

const targetSelector = computed(() => {
	if (!props.target) {
		return null;
	}

	return `#${props.target}`;
});

const spacingClass = computed(() => {
	if (props.sticky && scrolled) {
		return isMobileVersion ? 'px-4 py-1' : 'px-14 py-1';
	}

	return isMobileVersion ? 'pa-4' : 'px-14 py-7';
});

const contentSheetHeight = computed(() => {
	if (scrolled) {
		return isMobileVersion ? 52 : 72;
	}

	return isMobileVersion ? 72 : 120;
});

const height = computed(() => {
	if (showNavigationBar) {
		return contentSheetHeight + 48;
	}

	return contentSheetHeight;
});

const hasNavigationItems = computed(() => {
	return Boolean(props.navigationItems || slots['navigation-drawer']);
});

const showHeaderMenuBtn = computed(() => {
	const hasNavigation = Boolean(props.navigationItems || slots['navigation-drawer']);

	return !props.showNavBarMenuBtn && isMobileVersion && hasNavigation;
});

const showNavigationBar = computed(() => {
	if (slots['navigation-bar-content']) {
		return true;
	}

	if (showHeaderMenuBtn) {
		return false;
	}

	return hasNavigationItems;
});

const showSpacer = computed(() => {
	return Boolean(slots.default) || isMobileVersion;
});

function updateDrawer(value: boolean): void {
	this.drawer = value;
}

function onScroll(e: MouseEvent): void {
	if (!this.sticky) {
		return;
	}

	const target = e.currentTarget as HTMLElement | Window;
	const header = this.$refs.appBar.$el;
	const headerHeight = header?.clientHeight || 0;
	const scrollPosition = target === window ? window.scrollY : (target as HTMLElement).scrollTop;

	this.scrolled = this.sticky && scrollPosition > headerHeight;
}
</script>

<style lang="scss" scoped>
.vd-header-bar {
	z-index: 1;
}
</style>
