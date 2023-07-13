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
    <article>
        <div class="mainWidth flex justifyCenter wrapReverse gap50">
            <div class="textBox flex column justifyEnd gap20">
                <h1 class="sectionArticleTitle bodyTitle lightText">{{ title }}</h1>
                <h2 v-if="subtitle">{{ subtitle }}</h2>

                <p class="lightText bodyText1">{{ text }}</p>

                <div class="sectionArticle_buttonBox block" v-if="showButton">
                    <ButtonReadMore :link="link" />
                </div>
            </div>

            <img :src="image" :alt="alt">
        </div>
    </article>
</template>

<style setup>

img {
    width: min(250px, 100%);
    
}
.textBox {
    width: min(100ch, 100%);
}

</style>