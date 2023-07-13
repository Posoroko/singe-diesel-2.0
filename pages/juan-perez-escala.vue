<script setup>
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        fields: 'id, headerImage, paragraph1, paragraph2, paragraph3, paragraph4',
    }
}

const { data: pageData } = await useAsyncData(
    "juan",
    async () => {
        const items = await $fetch(`${directusItems}Juan`, fetchOptions)

        return items.data
    }
    ,
    { server: true }
)
</script>

<template>
    <PageMain>
        <template #headerImage>
            <div class="mainWidth">
                <img :src="`${directusAssets}${pageData.headerImage}`" alt="" class="headerImage_small">

                <SectionTitle title="Juan Perez Escala" />
            </div>
        </template>

        <template #main>
            <div class="mainWidth textBox lightText">
                <p class="introText bodyText1">{{ pageData.paragraph1 }}</p>

                <p class="introText bodyText1">{{ pageData.paragraph }}</p>
              
                <p class="introText bodyText1">{{ pageData.paragraph3 }}</p>

                <p class="introText bodyText1">{{ pageData.paragraph4 }}</p>
            </div>
        </template>
    </PageMain>
</template>

<style scoped>
.textBox {
    width: min(120ch, 100%);
    /* text-align: center; */
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

</style>