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

                <div class="narrowWidth">
                    <SectionTitle :title="show.mainTitle" v-if="show.multiVersions"/>
                    <SectionTitle :title="show.title" v-else />
                </div>

                <div class="narrowWidth flex">
                    <div class="infoBox marTop50 flex column gap5">
                        <p v-if="show.age" class="showAge">{{show.age}}</p>

                        <div class="" v-if="!show.multiVersions">
                            <p v-if="show.length">durée : {{ show.length }}</p>
                        </div>

                        <div class="" v-if="show.multiVersions">
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

                    <div class="flex justifyCenter alignCenter gap20">
                        <img v-for="image in show.images" :key="image.image" :src="`${directusAssets}${image.directus_files_id}`" :alt="`Spectacle ${show.mainTitle} de la compagnie Singe Diesel`">
                    </div>

                
                    <ul class="creditsBox creditText lightText" v-if="show.cast.length">
                        <li class="creditLine">
                            <h3 class="creditTitle bodyTitle lightText credtitLeftBox">Distribution</h3>
                        </li>

                        <li class="creditLine" v-for="el in show.cast" :key="el.Credits_id.id">
                            <span class="credtitLeftBox">{{ el.Credits_id.role }}</span>
                            <span>{{ ` : ` }}</span>
                            <span>{{ el.Credits_id.name }}</span>
                        </li>

                    </ul>

                    <ul class="creditsBox creditText lightText" v-if="show.cast.mentions">
                        <li class="creditLine">
                            <h3 class="creditTitle bodyTitle lightText credtitLeftBox">Mentions</h3>
                        </li>

                        <li class="creditLine" v-for="(el, index) in show.mentions" :key="index">
                            <span class="credtitLeftBox">{{ el.Mentions_id.role }}</span>
                            <span>{{ ` : ` }}</span>
                            <ul>
                                <li v-for="(collaborator, index) in el.Mentions_id.collaborators" :key="index">
                                    {{ collaborator.Collaborators_id.name }}
                                </li>
                            </ul>
                        </li>
                
                    </ul>
                </div>

                <div class="mainWidth" v-else>
                    <p class="bodyText1 lightText">{{ show.presentation }}</p>

                    <div class="flex justifyCenter marTop50">
                        <img class="poster narrowWidth" :src="`${directusAssets}${show.poster}`" alt="">
                    </div>
                </div>

            </template>
        </PageMain>
</template>

<style>
:root {
    --box-border: 1px solid  rgba(139, 240, 255, 0.179);
}
</style>

<style setup>

.infoBox {
    font-family: 'Poppins';
    font-size: clamp(1.4rem, 2vw + 0.1rem, 1.6rem);
    font-weight: 200;
    color: white;
    padding: 10px;
    border-top: var(--box-border);
    border-bottom: var(--box-border);
}
.showAge {
    padding-bottom: 5px;
    border-bottom: var(--box-border);
}
p.presentation {
    white-space: pre-wrap;

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
    gap: 20px;
    padding: 5px;
    border-bottom: var(--box-border);
}
.credtitLeftBox {
    width: min(350px, 100%);
    text-align: right;
    
}

</style>