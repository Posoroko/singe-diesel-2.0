<script setup>
const route = useRoute()

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        // fields: 'id, title, poster, teaser, slug',
    }
}

const { data: show } = await useAsyncData(
    `show_${route.params.title}`,
    async () => {
        const items = await $fetch(`${directusItems}Shows?filter[slug][_eq]=${route.params.title}`, fetchOptions)
        console.log(items.data[0])
        return items.data[0]
    }
    ,
    { server: true }
)

</script>

<template>
    

    <PageMain>
            <template #headerImage>
                <img :src="`${directusAssets}${show.headerImage}`" 
                    :alt="`Spectacle ${show.title} de la compagnie Singe Diesel`" class="headerImage_small">
            </template>

            <template #main>

                <div class="mainWidth">
                    <SectionTitle :title="show.title" />
                </div>


            </template>
        </PageMain>
</template>
