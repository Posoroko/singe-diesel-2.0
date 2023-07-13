<script setup>
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        fields: 'id, title, poster, teaser, slug',
    }
}

const { data: shows } = await useAsyncData(
    "showsPage",
    async () => {
        const items = await $fetch(`${directusItems}Shows`, fetchOptions)

        return items.data
    }
    ,
    { server: true }
)

</script>

<template>
    <PageMain>
        <template #headerImage>
            
        </template>

        <template #main>

            <div class="mainWidth">
                <SectionTitle title="Les spectacles" />
            </div>

            <SectionArticle class="marTop50" v-for="show in shows" :key="show.id" 
                :title="show.title" 
                :image="`${directusAssets}${show.poster}`"
                :alt="`Affiche du Spectacle ${show.title} de la compagnie Singe Diesel`" 
                :text="show.teaser"
                :link="`/spectacles/${show.slug}`" 
                :showButton="true" />

        </template>
    </PageMain>
</template>

<style scoped>

</style>