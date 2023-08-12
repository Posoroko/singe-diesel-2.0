<script setup>
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        fields: 'id, headerImage, paragraph1, paragraph2, paragraph3',
    }
}

const { data: pageData } = await useAsyncData(
    "compagnie",
    async () => {
        const items = await $fetch(`${directusItems}theCompany`, fetchOptions)

        return items.data
    }
    ,
    { server: true }
)
</script>

<template>
    <PageMain>
        <template #headerImage>
            <img class="headerImage_small" :src="`${directusAssets}${pageData.headerImage}`" alt="">

            <div class="mainWidth">
                <SectionTitle title="La compagnie" />
            </div>
        </template>

        <template #main>
            <div class="mainWidth">
                <div class="textBox lightText">
                    <p class="introText bodyText1">{{ pageData.paragraph1 }}</p>

                    <p class="introText bodyText1">{{ pageData.paragraph2 }}</p>

                    <p class="introText bodyText1">{{ pageData.paragraph3 }}</p>
                </div>
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
}</style>