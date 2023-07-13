<script setup>
const props = defineProps({
    text: String
})
</script>

<template>
    <div class="introBox centered mainWidth">
        <p class="lightText">{{ text }}</p>
    </div>
</template>

<style scoped>
.introBox {
    min-height: 75vh;
    padding: 0 20px;
}
.introBox p {
    font-family: 'Poppins', sans-serif;
    width: min(65ch, 100%);
    font-size: clamp(1.6rem, 2.5vw + 0.1rem, 2.2rem);
    font-weight: 200;
    line-height: 1.5;
    text-align: justify;
    text-indent: 2rem;
}
</style>