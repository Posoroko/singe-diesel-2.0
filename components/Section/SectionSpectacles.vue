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
        <div class="mainWidth flex justifyCenter wrapReverse">
            <div class="textBox flex column justifyBetween gap20">
                <h1 class="title">{{ title }}</h1>

                <h2 v-if="subtitle">{{ subtitle }}</h2>

                <p class="lightText bodyText1" v-if="text">{{ text }}</p>

                <div class="sectionArticle_buttonBox block" v-if="showButton">
                    <ButtonReadMore :link="link" />
                </div>
            </div>

            <img :src="image" :alt="alt">
        </div>
    </article>
</template>

<style setup>
article {
    padding: 30px 6px;
}

img {
    width: min(250px, 100%);
}

.title {
    font-family: 'Cormorant', serif;
    font-size: clamp(2.6rem, 4vw + 0.1rem, 4rem);
    font-weight: 500;
    line-height: 1.3;
    color: var(--background);
}

.textBox {
    width: min(100ch, 100%);
    padding: 40px;
    background-color: var(--brand-color-2);
}
</style>