<script setup>
const route = useRoute()
console.log(route.path)

const images = {
    index: '',
    juan: '/images/portrait-triple-nb.jpg'
}
</script>

<template>
    <header class="header_large relative" v-if="route.path == '/'">
        <img class="headerImage" src="/images/scene-juan.jpg" alt="">
        <div class="headerTitle lightText">
            <!-- <h1>Singe Diesel</h1> -->
            <p>Compagnie de théâtre <br> de marionnettes</p>
        </div>
    </header>

    <header class="header_juan"  v-if="route.path == '/juan-perez-escala'">
        <img src="/images/portrait-triple-nb.jpg" alt="">
    </header>

    <header class="header_compagnie"  v-if="route.path == '/la-compagnie'">
        <img src="/images/juan01.jpg" alt="">
    </header>
</template>

<style scoped>

.headerImage {
    width: 100%;
    height: 90vh;
    object-fit: cover;
}
.headerTitle {
    font-size: max(4.35vw, 40px);
    line-height: 0.7;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.36);
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    text-transform: uppercase;
}
.header_juan,
.header_compagnie {
    height: 75vh;
}
.header_juan img,
.header_compagnie img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>