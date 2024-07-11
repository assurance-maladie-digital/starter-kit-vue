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
		 label:'Cookie Banner',
		 to:'/cookieBanner'
	 },
	 {
		 label: 'Password Field',
		 to: '/password'
	 },
	 {
		 label: 'Maintenance',
		 to: '/maintenance',
	 },
	 {
		 label: 'Not Found',
		 to: '/notFound',
	 },
 ]

</script>
