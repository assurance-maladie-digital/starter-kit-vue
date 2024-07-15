<template>
	<HeaderBar
		service-title="Design System"
		service-sub-title="Documentation du Design System"
		:navigation-items="navigationItems"
	/>
</template>
<script setup lang="ts">
import { HeaderBar } from "@cnamts/synapse-bridge";
 const navigationItems = [
	 {
		 label: 'Accueil',
		 to: '/home',
	 },
	 {
		 label: 'Header',
		 to: '/headers'
	 },
	 {
		 label:'SubHeader',
		 to:'/subHeader'
	 },
	 {
		 label:'HeaderLoading',
		 to:'/headerLoading'
	 },
	 {
		 label:'Logo',
		 to:'/logo'
	 },
	 {
		 label:'FooterWrapper',
		 to:'/footerWrapper'
	 },
	 {
		 label: 'Btns',
		 to: '/userMenuBtn'
	 },
	 {
		 label: 'DialogBox',
		 to: '/dialogBox'
	 },
	 {
		 label: 'Nirfield',
		 to: '/nirfield'
	 },
	 {
		 label: 'NotifBar',
		 to: '/notificationBar'
	 },
	 {
		 label: 'PeriodField',
		 to: '/periodfield'
	 },
	 {
		 label: 'DatePicker',
		 to: '/datePicker'
	 },
	 {
		 label:'DataList',
		 to:'/dataList'
	 },
	 {
		 label:'CookieBanner',
		 to:'/cookieBanner'
	 },
	 {
		 label:'CookiesPage',
		 to:'/cookiesPage'
	 },
	 {
		 label:'ChipList',
		 to:'/ChipList'
	 },
	 {
		 label: 'Password Field',
		 to: '/password'
	 },
	 {
		 label:'AlertWrapper',
		 to:'/alertWrapper'
	 },
	 {
		 label:'PhoneField',
		 to:'/phoneField'
	 },
	 {
		 label:'SkipLink',
		 to:'/skipLink'
	 },
	 {
		 label:'RatingPicker',
		 to:'/ratingPicker'
	 },
	 {
		 label: 'PaginatedTable',
		 to: '/paginatedTable'
	 },
	 {
		 label: 'TableToolbar',
		 to: '/tableToolbar'
	 },
	 {
		 label: 'RangeField',
		 to: '/rangeField'
	 },
	 {
		 label: 'ExternalLinks',
		 to: '/externalLinks'
	 },
	 {
		 label: 'PasswordField',
		 to: '/passwordField'
	 },
	 {
		 label: 'CustomIcon',
		 to: '/customIcon',
	 },
	 {
		 label: 'SearchListField',
		 to: '/searchListField',
	 },
	 {
		 label: 'FileList',
		 to: '/fileList',
	 },
	 {
		 label: 'FileUpload',
		 to: '/fileUpload',
	 },
	 {
		 label: 'UploadWorkflow',
		 to: '/uploadWorkflow',
	 },
	 {
		 label: 'FiltersSideBar',
		 to: '/filtersSideBar',
	 },
	 {
		 label: 'FiltersInline',
		 to: '/filtersInline',
	 },
	 {
		 label: 'Maintenance',
		 to: '/maintenance',
	 },
	 {
		 label: 'Not Found',
		 to: '/notFound',
	 },
	 {
		 label: 'Error',
		 to: '/error',
	 },
 ]

</script>
