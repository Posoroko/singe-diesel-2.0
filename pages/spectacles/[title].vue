<script setup>
const route = useRoute()

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        fields: 'id, onlyDisplayPoster, title, age, length, mainTitle, multiVersions, versions, versions.Shows_versions_id.*, presentation, headerImage, poster, images, images.directus_files_id, bookingn, show, showOnline, cast, cast.Credits_id.*, mentions, mentions.Mentions_id.*, mentions.Mentions_id.collaborators.Collaborators_id.* ',
    }
}

const { data: show } = await useAsyncData(
    `show_${route.params.title}`,
    async () => {
        const items = await $fetch(`${directusItems}Shows?filter[slug][_eq]=${route.params.title}`, fetchOptions)
        console.log(items.data)
        return items.data[0]
    }
    ,
    { server: true }
)

</script>

<template>
    

    <PageMain v-if="show">
            <template #headerImage>
                <img  :src="`${directusAssets}${show.headerImage}`" 
                    :alt="`Spectacle ${show.title} de la compagnie Singe Diesel`" 
                    class="headerImage_small"
                    v-if="show.headerImage">

                <div class="marTop50"></div>

                <div class="mainWidth">
                    <h1 class="bodyTitle lightText" v-if="show.multiVersions">{{ show.mainTitle }}</h1>
                    
                    <h1 class="bodyTitle lightText" v-else>{{ show.title }}</h1>

                </div>

                <div class="mainWidth">
                    <div class="infoBox marTop50">
                        <p v-if="show.age" class="showAge infoLine">{{show.age}}</p>

                        <div class="infoLine" v-if="!show.multiVersions">
                            <p v-if="show.length">durée : {{ show.length }}</p>
                        </div>

                        <div class="infoLine" v-if="show.multiVersions">
                            <p v-for="version in show.versions" :key="version.Shows_versions_id.id">
                                <span>{{ `${version.Shows_versions_id.title} -  ${version.Shows_versions_id.length}` }}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </template>

            <template #main>
                <div class="mainWidth" v-if="!show.onlyDisplayPoster">

                    <p class="presentation narrowWidth bodyText1 lightText">{{ show.presentation }}</p>

                    <div class="agenda mainWidth flex justifyCenter">
                        <div class="agendaBox flex column justifyCenter alignCenter gap20">
                            <p class="bodyText1 lightText">Visitez l'agenda pour découvrir les dates de ce spectacle!</p>

                            <ButtonReadMore link="/agenda" text="agenda"/>
                        </div>
                    </div>


                    <div class="mainWidth imagesBox flex justifyCenter alignCenter gap20 marTop50">
                        <img class="" v-for="image in show.images" :key="image.image" :src="`${directusAssets}${image.directus_files_id}`" :alt="`Spectacle ${show.mainTitle} de la compagnie Singe Diesel`">
                    </div>

                
                    <ul class="creditsBox creditText lightText marTop50" v-if="show.cast.length">
                        <li class="creditLine">
                            <h3 class="creditTitle bodyTitle lightText credtitLeftBox">Distribution</h3>
                        </li>

                        <li class="creditLine" v-for="el in show.cast" :key="el.Credits_id.id">
                            <p class="credtitLeftBox">{{ `${el.Credits_id.role} :` }}</p>

                            <p class="creditRightBox">{{ el.Credits_id.name }}</p>
                        </li>

                    </ul>

                    <ul class="creditsBox creditText lightText marTop50" v-if="show.mentions">
                        <li class="creditLine">
                            <h3 class="creditTitle bodyTitle lightText credtitLeftBox">Mentions</h3>
                        </li>

                        <li class="creditLine" v-for="(el, index) in show.mentions" :key="index">
                            <p class="credtitLeftBox">{{ `${el.Mentions_id.role} :`  }}</p>

                            <ul class="creditRightBox">
                                <li v-for="(collaborator, index) in el.Mentions_id.collaborators" :key="index">
                                    <p>{{ collaborator.Collaborators_id.name }}</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div class="marTop50"></div>
                </div>

                <div class="mainWidth" v-else>
                    <p class="altPresentation bodyText1 lightText marTop50">{{ show.presentation }}</p>

                    <div class="posterBox flex justifyCenter marTop50">
                        <img class="poster" :src="`${directusAssets}${show.poster}`" alt="">
                    </div>
                </div>

            </template>
        </PageMain>
</template>

<style setup>
.mainWidth.agenda {
    border-top: var(--box-border);
    padding-top: 50px;
}
.agendaBox {
    background-color: var(--background-dark);
    padding: 30px 40px;
    border-radius: 10px;
    
}

.infoBox {
    font-family: 'Poppins';
    font-size: clamp(1.4rem, 2vw + 0.1rem, 1.6rem);
    font-weight: 200;
    color: white;
    /* padding: 10px 0; */
    border-top: var(--box-border);
    border-bottom: var(--box-border);
}
.infoLine{
    padding: 5px;
}
.showAge {
    border-bottom: var(--box-border);
}
p.presentation {
    white-space: pre-wrap;
    padding: 75px 0;
}
.imagesBox {
    padding: 75px 0;
    border-top: var(--box-border);
    border-bottom: var(--box-border);
}
.creditText {
    font-family: 'Poppins';
    font-size: clamp(1.4rem, 2vw + 0.1rem, 1.6rem);
    font-weight: 200;
    letter-spacing: 0.5px;
    line-height: 1.5;
}

.creditLine {
    display: flex;
    gap: 5px;
    padding: 5px 0;
    border-bottom: var(--box-border);
    
}
@media (max-width: 799px) {
    .creditLine {
        flex-wrap: wrap;
    }
    .creditLeftBox {
        text-align: left;
    }
     .creditRightBox {
        padding-left: 25px;
        
    }
    .creditRightBox * {
        margin-top: 5px;
        
    }
}
@media (min-width: 800px) {
    .credtitLeftBox {
        width: 30%;
        text-align: right;
    }
    .creditRightBox {
        width: 70%;
    }
}
.altPresentation{
    padding: 50px 0;
}
.posterBox {
    border-top: var(--box-border);
    border-bottom: var(--box-border);
    padding: 50px;
}
.poster {
    width: 90vw;
    height: 90vh;
    object-fit: contain;
}
</style>