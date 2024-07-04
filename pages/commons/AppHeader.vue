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
		 label: 'Tokens',
		 to: '/tokens',
	 },
	 {
		 label: 'Maintenance',
		 to: '/maintenance',
	 },
	 {
		 label: 'Erreur',
		 to: '/not-found',
	 },
	 {
		 label: 'Header',
		 to: '/headers'
	 },
	 {
		 label: 'Maintenance',
		 to: '/maintenance'
	 },
	 {
		 label: 'Error Page',
		 to: '/error'
	 },
	 {
		 label: 'Not Found Page',
		 to: '/not-found'
	 },
	 {
		 label: 'Btns',
		 to: '/userMenuBtn'
	 },
	 {
		 label: 'Dial Box',
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
		 label: 'Period Field',
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
	 }
 ]

</script>
