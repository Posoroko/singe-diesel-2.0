<script setup>
const shows = [
    {
        id: 0,
        title: "Kazu",
        image: "/images/spectacles/affiche-kazu.jpg",
        alt: "Affiche du spectacle Kazu"
    },
    {
        id: 1,
        title: "Sueno",
        image: "/images/spectacles/affiche-sueno.jpg",
        alt: "Affiche du spectacle Sueno"
    },
    {
        id: 2,
        title: "Métaphores",
        image: "/images/spectacles/metaphores.jpg",
        alt: "Affiche du spectacle Métaphores"
    }
]

const numberOfShows = shows.length


</script>

<template>
    <section class="sectionSpectacles relative">
        <div class="titleBox mainWidth">
            <SectionTitle title="Spectacles" />
        </div>

        <ul class="drawer flex justifyCenter alignCenter wrap">
            <li class="showBox" v-for="show in shows" :key="show.id">
                <img class="showImage" :src="show.image" :alt="show.alt">
                <h2 class="showTitle poppins lightText">{{ show.title }}</h2>
            </li>
        </ul>

        <!-- <WidgetLeftRightNavigation /> -->
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