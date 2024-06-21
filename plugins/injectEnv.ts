import { defineNuxtPlugin } from '#app'
import { useRuntimeConfig } from '#app'
import fs from 'fs'
import path from 'path'

export default defineNuxtPlugin({
	enforce: 'pre',
	hooks: {
		async 'app:created'() {
			const filePath = path.resolve(process.cwd(), 'public/json/config.env.json')
			const fileContents = fs.readFileSync(filePath, 'utf-8')
			const res = JSON.parse(fileContents)

			for (const key in res) {
				const config = useRuntimeConfig()
				config.public[key] = res[key]
			}
		}
	}
})
