<script setup>
const juan = {
    title: "Juan Perez",
    image: "/images/juan_portrait_01.jpg",
    alt: "Juan Perez-Escala, marionnettiste",
    text: "Fils d'un comédien de la Comedia d’Argentine, et directeur du “theatre del bosque”, Juan est immergé dans le théâtre dès son plus jeune âge. Mais il se tourne vers les Beaux Arts et multiplie les expériences en tant que sculpteur et dessinateur. Autodidacte, il acquiert un savoir-faire de fabrication de marionnettes et de dramaturgie par l'image. ",
    link: "/juan-perez-escala"
}
</script>

<template>
    <div>
        <HomePageIntro />
    </div>

    <div class="mainWidth">
        <SectionArticle :title="juan.title" :image="juan.image" :alt="juan.alt" :text="juan.text" :link="juan.link"/>
    </div>

    <div class="wideImageFrame">
        <img class="w100" src="/images/juan-bureau-02.jpg" alt="">
    </div>

    <div class="mainWidth">
        <HomePageSpectacles />
    </div>
</template>

<style scoped>
.wideImageFrame {
    width: min(100%, 2540px);
    height: 75vh;
    position: relative;
}
.wideImageFrame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>