<script setup>

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        fields: 'id, title, poster' 
    }
}

const { data: shows } = await useAsyncData(
    "shows",
    async () => {
        const items = await $fetch(`${directusItems}Shows`, fetchOptions)
        console.log(items.data)
        return items.data
    }
    ,
    { server: true }
)
const numberOfShows = shows.length

</script>

<template>
    <section>
        <div class="mainWidth relative">
            <div class="titleBox mainWidth">
                <SectionTitle title="Spectacles" />
            </div>

            <ul class="drawer flex justifyCenter alignCenter wrap">
                <li class="showBox" v-for="show in shows" :key="show.id">
                    <img class="showImage" :src="`${directusAssets}${show.poster}`" :alt="`Affiche du spectacle ${show.title} de la compagnie Singe Diesel`">
                    <h2 class="showTitle poppins lightText">{{ show.title }}</h2>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.drawer {
    gap: 3vw;
}
.showBox {
    width: min(250px, 90vw);
    aspect-ratio: 3/4;
}
.showImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.showTitle {
    font-size: 2.2rem;
    font-weight: 200;
    padding: 10px 0;
}

</style>