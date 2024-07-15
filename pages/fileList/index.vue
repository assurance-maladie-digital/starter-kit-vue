<template>
	<FileList :files="fileList" />
	<br /><br />
	<FileList :files="fileList2" />
	<br /><br />
	<FileList
		:files="fileList2"
		show-view-btn
		hide-last-divider
	/>
	<br /><br />
	<FileList
		:files="fileList2"
		show-view-btn
		hide-delete-btn
	/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	FileList,
} from "@cnamts/synapse-bridge";

import { FileItem } from "@cnamts/synapse-bridge/src/elements/FileList/types";

export default defineComponent({
	components: {
		FileList,
	},
	data() {
		return {
			fileList: [
				{
					title: "RIB",
					state: "initial",
				},
				{
					title: "Carte d’identité recto / verso",
					state: "initial",
					optional: true
				},
				{
					title: "Passport",
					state: "initial",
				},
			] as FileItem[],

			fileList2: [
				{
					title: "RIB",
					name: "rib.pdf",
					state: "success",
				},
				{
					title: "Carte d’identité recto / verso",
					name: "carte-identite.jpg",
					state: "success",
				},
				{
					title: "Passport",
					name: "passport.jpg",
					state: "error",
				},
			] as FileItem[],
		};
	},
});
</script>
