<script setup>
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        fields: 'id, title, mainTitle, poster, teaser, slug, age',
    }
}

const { data: shows } = await useAsyncData(
    "showsPage",
    async () => {
        const items = await $fetch(`${directusItems}Shows?sort=-id`, fetchOptions)
        const shows = items.data

        shows.forEach( show => {
             if (show.mainTitle) {
                show.title = show.mainTitle
            }
        })
        

        return shows
    }
    ,
    { server: true }
)

</script>

<template>
    <PageMain>
        <template #headerImage>
            
        </template>

        <template #main>

            <div class="mainWidth">
                <SectionTitle title="Les spectacles" />
            </div>

            <article class="largeCard" v-for="show in shows" :key="show.id">
                <div class="mainWidth flex justifyCenter wrapReverse">
                    <div class="largeCard_textBox flex relative column justifyCenter">
                        <div>
                            <h1 class="largeCard_title " 
                                :class="{ 'largeCard_smallTitleFont' : show.title.length > 8 }" > 
                                {{ show.title }}
                            </h1>
                            
                            <p class="largeCard_titleNote ">{{ show.age }}</p>
                            
                            <h2 v-if="subtitle">{{ subtitle }}</h2>
                        </div>

                        <p class=" largeCard_text bodyText1">{{ show.teaser }}</p>

                        <div class="buttonBox flex justifyEnd marTop20">
                            <ButtonJumpingDots textColor="dark" :url="`/spectacles/${show.slug}`" />
                        </div>

                        <NuxtLink to="/agenda" class="largeCard_agendaBtn centered">
                            <span class="icon">
                                event
                            </span>
                        </NuxtLink>
                    </div>

                    <div class="largeCard_imgFrame">
                        <img class="largeCard_image" :src="`${directusAssets}${show.poster}`" alt="alt">
                    </div>
                </div>
            </article>
        </template>
    </PageMain>
</template>

<style scoped>

</style>