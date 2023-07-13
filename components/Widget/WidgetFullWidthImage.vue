<script setup>
const props = defineProps({
    url: String,
    height: String
})
</script>

<template>
    <img :src="url" alt="">
</template>

<style scoped>

img {
    width: 100%;
    height: v-bind("height");
    object-fit: cover;
    object-position: center;
}
</style>