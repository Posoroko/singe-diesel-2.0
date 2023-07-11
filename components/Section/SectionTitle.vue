<script setup>
const props = defineProps({
    title: String
})
</script>
<template>
    <h1 class="sectionTitle bodyTitle lightText">{{ title }}</h1>
</template>

<style scoped>
.sectionTitle {
    padding: 20px 20px 20px 10vw;
}
</style>