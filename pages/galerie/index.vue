<script setup>
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        fields: 'id, title, images, images.*, description, slug, headerImage',
    }
}

const { data: albums } = await useAsyncData(
    "albums",
    async () => {
        const items = await $fetch(`${directusItems}Albums`, fetchOptions)

        return items.data
    }
    ,
    { server: true }
)

</script>

<template>
    <PageMain v-if="albums">
        <template #headerImage>
            <div class="mainWidth">
                <SectionTitle title="Galerie" />
            </div>
        </template>

        <template #main>
            <p class="bodyText2 lightText marTop50 mainWidth">
                Explorez les albums d'images pour découvrir l'univers de la compagnie Singe Diesel.
            </p>

                <div class="cardBox flex justifyCenter gap20 wrap">              
                    <article class="largeCard vertical" v-for="album in albums" :key="album.id">
                        <div class="flex justifyCenter  wrapReverse relative">
                            <div class="largeCard_textBox flex  column justifyCenter">
                                <div>
                                    <h1 class="albumCard_title "> 
                                        {{ album.title }}
                                    </h1>
                                
                                    <p class="largeCard_titleNote poppins marTop20">nombre d'image: {{ album.images.length }}</p>
                                </div>

                                <div class="hoverBox flex column justifyEvenly">
                                    <p class="bodyText1 lightTex">{{ album.description }}</p>

                                    <div class="buttonBox flex justifyEnd">
                                        <ButtonJumpingDots text="voir l'album" textColor="dark" :url="`/galerie/${album.slug}`" />
                                    </div>
                                </div>
                            </div>

                            <div class="largeCard_imgFrame">
                                <img class="largeCard_image" :src="`${directusAssets}${album.headerImage}?key=album-cover`" alt="alt">
                            </div>
                        </div>
                    </article>
                </div>

        </template>
    </PageMain>
</template>

<style setup>
.cardBox {
    width: min(900px, 100%);
}

.albumCard_title {
    font-family: 'Poppins', sans-serif;
    font-size: 40px;
    font-weight: 200;
    line-height: 1;
    transform: translateX(-5px);
}


.hoverBox {
    background-color: var(--brand-color-1);
    padding: 0px clamp(5px, 2vw, 40px);
}

@media (max-width: 999px) or (hover: none) {
    .hoverBox p {
        display: none;
    }	

    .buttonBox {
        margin-top: 20px;
    }
}


@media (min-width: 1000px)  and (hover: hover){
    .hoverBox p {
        display: block;
    }
    .hoverBox {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .largeCard_textBox:hover .hoverBox {
        opacity: 0.95;
        transition: 300ms ease;
    }

.hoverBox {
    backdrop-filter: blur(10px);
        opacity: 0;
        transition: 300ms ease;
    }
}
</style>