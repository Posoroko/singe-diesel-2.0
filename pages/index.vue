<script setup>
const juan = {
    title: "Juan Perez",
    image: "/images/juan_portrait_01.jpg",
    alt: "Juan Perez-Escala, marionnettiste",
    text: "Fils d'un comédien de la Comedia d’Argentine, et directeur du “theatre del bosque”, Juan est immergé dans le théâtre dès son plus jeune âge. Mais il se tourne vers les Beaux Arts et multiplie les expériences en tant que sculpteur et dessinateur. Autodidacte, il acquiert un savoir-faire de fabrication de marionnettes et de dramaturgie par l'image. ",
    link: "/juan-perez-escala"
}

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        // fields: 'id, title, subtitle, content, image, imageAlt, moreInfo, date_created, file, fileName',
    }
}

const { data: pageData } = await useAsyncData(
    "homepage",
    async () => {
        const items = await $fetch(`${directusItems}Homepage`, fetchOptions)
        console.log(items.data)
        return items.data
    }
    ,
    { server: true }
)

</script>

<template>
    <PageMain>

        <template #headerImage>
            <img class="headerImage_large" :src="`${directusAssets}${pageData.headerImage}`" alt="">
        </template>
        
        <template #main>
            <HomePageIntro :text="pageData.introText" />

            <WidgetFullWidthImage class="blended" url="/images/bandeau-aquarelle-sueno.jpg" height="max(50vh, 50px)" />

            <SectionArticle :title="juan.title" :image="juan.image" :alt="juan.alt" :text="juan.text" :link="juan.link"/>

            <WidgetFullWidthImage :url="`${directusAssets}${pageData.stripeImage1}`" height="max(80vh, 300px)" />

            <HomePageSpectacles />
        </template>
    </PageMain>
</template>

<style scoped>
.blended {
    
}
.wideImageFrame {
    width: min(100%, 2540px);
    height: 75vh;
    position: relative;
}
.wideImageFrame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

</style>