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
    <h1>Hello Juan</h1>

    <div class="mainWidth">
        <SectionArticle :title="juan.title" :image="juan.image" :alt="juan.alt" :text="juan.text" :link="juan.link"/>
    </div>

    <div class="mainWidth">
        <HomePageSpectacles />
    </div>
</template>