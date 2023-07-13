<script setup>
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        // fields: 'id, headerImage, paragraph1, paragraph2, paragraph3, paragraph4',
    }
}

const { data: team } = await useAsyncData(
    "team",
    async () => {
        const items = await $fetch(`${directusItems}Team`, fetchOptions)

        return items.data
    }
    ,
    { server: true }
)

</script>

<template>
    <PageMain>
        <template #headerImage>
            <div class="pageBox mainWidth">
                <SectionTitle title="L'équipe artistique" />
            </div>
        </template>

        <template #main>
            <SectionArticle 
            class="marTop50" v-for="friend in team" :key="friend.id" 
            :title="`${friend.firstName} ${friend.lastName}`" 
            :image="`${directusAssets}${friend.image}`" 
            :alt=" `${friend.firstName} ${friend.lastName} de la compagnie Singe Diesel`" :text="friend.bio" 
            :showButton="false"/>

        </template>
    </PageMain>
</template>

<style scoped>
.pageBox {
    padding: 50px 20px;
}
</style>