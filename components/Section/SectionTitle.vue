<script setup>
const props = defineProps({
    title: String,
    textColor: String
})
</script>
<template>
    <div class="titleBox flex">
        <h1 class="title bodyTitle lightText" :class="textColor">{{ title }}</h1>
    </div>
</template>

<style scoped>
/* .titleBox {
    padding: 20px 20px 20px 10vw;
    margin: 40px 20px 60px 10vw;
} */
.title {
    /* color: var(--card-text-color); */
    border: 1px solid var(--brand-color-1);
    border-right: none;
    border-left: none;
    padding: 10px 30px;
    margin: 30px 0;
    position: relative;
}
.title.dark {
    color: var(--card-text-color);
}
.title.light {
    color: white;
}
</style>