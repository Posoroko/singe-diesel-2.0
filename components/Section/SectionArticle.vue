<script setup>
const props = defineProps({
    title: String,
    subtitle: String,
    image: String,
    alt: String,
    text: String,
    link: String,
    showButton: Boolean
})

</script>

<template>
    <article class="sectionArticle flex justifyCenter wrapReverse">
        <div class="textBox flex column justifyEnd gap20">
            <h1 class="sectionArticleTitle bodyTitle lightText">{{ title }}</h1>
            <h2 v-if="subtitle">{{ subtitle }}</h2>

            <p class="lightText bodyText1">{{ text }}</p>

            <div class="sectionArticle_buttonBox block" v-if="showButton">
                <ButtonReadMore :link="link" />
            </div>
        </div>

        <img :src="image" :alt="alt">
    </article>
</template>

<style setup>
.sectionArticle {
    gap: 50px;
}
.sectionArticle img {
    width: min(250px, 100%);
    
}
.sectionArticle .textBox {
    width: min(100ch, 100%);
}

</style>