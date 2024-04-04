export default defineNuxtPlugin({
    enforce: 'pre',
    hooks: {
        async 'app:created'() {
            await $fetch<Record<string, string>>('/js/config.env.json')
                .then((res) => {
                    for (const key in res) {
                        const config = useRuntimeConfig();
                        config.public[key] = res[key];
                    }
                })
        }
    }
});
