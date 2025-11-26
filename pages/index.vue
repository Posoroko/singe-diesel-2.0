<script setup>
const juan = {
    title: "Juan Perez Escala",
    image: "/images/juan_portrait_01.webp",
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

        return items.data
    }
    ,
    { server: true }
)

</script>

<template>
    <PageMain v-if="pageData">
        <template #headerImage>
            <img class="headerImage_large" :src="`${directusAssets}${pageData.headerImage}?key=header1920&v=${Date.now()}`" alt="Compagnie Singe Diesel">
            
            <div class="titleBox absolute w100 bottom0 left0">
                <WidgetHeaderTitleCie />
            </div>
        </template>
        
        <template #main>
            <HomePageIntro :text="pageData.introText" />

            <!-- <img class="w100" src="/images/bandeau-aquarelle-sueno.jpg" alt="Compagnie Singe Diesel"> -->

            <!-- <div class="juan_spacing">
                <div class="largeCard"> -->
                    <!-- <SectionArticle :title="juan.title" :image="juan.image" :alt="juan.alt" :text="juan.text" :link="juan.link"/> -->

                    <article class="largeCard">
                        <div class="mainWidth flex justifyCenter wrapReverse">
                            <div class="largeCard_textBox flex relative column justifyCenter">
                                <div>
                                    <h1 class="largeCard_title"> 
                                        {{ juan.title }}
                                    </h1>
                                    
                                    <h2 v-if="subtitle">{{ subtitle }}</h2>
                                </div>

                                <p class=" largeCard_text bodyText1">{{ juan.text }}</p>

                                <div class="buttonBox flex justifyEnd marTop20">
                                    <ButtonJumpingDots textColor="dark" url="/juan-perez-escala" />
                                </div>

                                <NuxtLink to="/juan-perez-escala" class="largeCard_agendaBtn centered">
                                    <span class="icon">
                                        event
                                    </span>
                                </NuxtLink>
                            </div>

                            <div class="largeCard_imgFrame">
                                <img class="largeCard_image" :src="juan.image" :alt="juan.alt">
                            </div>
                        </div>
                    </article>
                <!-- </div>
            </div> -->

            <img class="horizMirror w100" :src="`${directusAssets}${pageData.stripeImage1}?key=webp`" alt="Compagnie Singe Diesel">

            <HomePageSpectacles />
        </template>
    </PageMain>
</template>

<style scoped>
.horizMirror {
    transform: scaleX(-1);
}
h2 {
    color: rgba(255, 255, 255, 0.403);
    font-size: 40px;
    font-family: 'cormorant', serif;
    text-align: center;
    width: min(100%, 500px);
    text-transform: uppercase;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
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
.juan_spacing {
    margin: 100px 0;
    display: flex;
    justify-content: center;
}
.juan_card {
    background-color: black;
}
</style>