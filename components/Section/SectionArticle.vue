<script setup>
const props = defineProps({
    title: String,
    image: String,
    alt: String,
    text: String,
    link: String
})

</script>

<template>
    <article class="sectionArticle flex justifyCenter wrap gap20">
        <img :src="image" :alt="alt">
        
        <div class="textBox flex column justifyEnd gap20">
            <h1 class="sectionArticleTitle bodyTitle lightText">{{ title }}</h1>

            <p class="lightText bodyText1">{{ text }}</p>

            <div class="sectionArticle_buttonBox block">
                <ButtonReadMore :link="link" />
            </div>
        </div>
    </article>
</template>

<style setup>
.sectionArticle img {
    width: min(250px, 100%);
}
.sectionArticle .textBox {
    width: min(100ch, 100%);
}

</style>