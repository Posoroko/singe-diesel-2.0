<script setup>
const route = useRoute()
console.log(route.path)

const images = {
    index: '',
    juan: '/images/portrait-triple-nb.jpg'
}
</script>

<template>
    <header class="header_large" v-if="route.path == '/'">
        <p>Compagnie de théâtre de marionnettes</p>
    </header>

    <header class="header_juan"  v-if="route.path == '/juan-perez-escala'">
        <img src="/images/portrait-triple-nb.jpg" alt="">
    </header>
</template>

<style scoped>

.header_large {
    flex-grow: 1;
}
.header_juan {
    height: 75vh;
}
.header_juan img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>