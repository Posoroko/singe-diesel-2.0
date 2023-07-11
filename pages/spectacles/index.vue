<script setup>
const shows = [
    {
        id: 0,
        title: "Sueno",
        synopsis: "Embarquez pour une performance marionnettique dans les mondes de Tom. ”.",
        image: "/images/spectacles/affiche-sueno.jpg",
        alt: "",
        link: "/spectacles/sueno"
    },
    {
        id: 1,
        title: "Kazu",
        synopsis: "Ce spectacle est une plongée dans l’atelier de marionnettes de Juan Perez Escala et dans l’univers du réalisme magique et de la micro fiction, courant artistique d’Amérique du Sud. ”.",
        image: "/images/spectacles/affiche-kazu.jpg",
        alt: "",
        link: "/spectacles/kazu"
    },
    {
        id: 2,
        title: "Métaphores",
        synopsis: "Ni mensonge, ni vérité, une métaphore est un voyage plus long, plus difficile, mais plus beau. Prochaine création Singe Diesel prévue en septembre 2023.",
        image: "/images/spectacles/metaphores.jpg",
        alt: "",
        link: "/spectacles/metaphores"
    }
]

</script>

<template>
    <div class="pageBox mainWidth">
        <SectionTitle title="Les spectacles" />

        <SectionArticle class="marTop50" v-for="show in shows" :key="show.id" :title="show.title" :image="show.image"
            :alt="show.alt" :text="show.synopsis" :showButton="true" />
    </div>
</template>

<style scoped>
.pageBox {
    padding: 50px 20px;
}
</style>