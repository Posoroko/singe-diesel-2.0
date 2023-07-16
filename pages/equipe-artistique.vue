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

            <ul class="cardBox flex gap20 wrap justifyCenter" title="Membres de l'équipe artistique">
                <li class="card" v-for="friend in team" :key="friend.id">
                    <article class="">
                        <img class="portrait" :src="`${directusAssets}${friend.image}`" 
                            :alt="`${friend.firstName} ${friend.lastName} de la compagnie Singe Diesel`">

                        <h1 class="bodyText2 lightText">{{ `${friend.firstName} ${friend.lastName}` }}</h1>
                    </article>
                </li>
            </ul>
        </template>
    </PageMain>
</template>

<style scoped>
.card {
    width: min(100%, 300px);
}
.portrait {
    width: 100%;
    aspect-ratio: 3/4;
    object-fit: cover;
    object-position: center;
}
.bodyText2 {
    padding: 10px 0;
}
</style>