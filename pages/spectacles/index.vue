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
        const items = await $fetch(`${directusItems}Shows`, fetchOptions)
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

            <article v-for="show in shows" :key="show.id">
                <div class="mainWidth flex justifyCenter wrapReverse">
                    <div class="textBox flex relative column justifyCenter">
                        <div>
                            <h1 class="title showText_dark" 
                                :class="{ 'smallTitleFont' : show.title.length > 8 }" > 
                                {{ show.title }}
                            </h1>
                            
                            <p class="age showText_dark">{{ show.age }}</p>
                            
                            <h2 v-if="subtitle">{{ subtitle }}</h2>
                        </div>

                        <p class="showText_dark bodyText1">{{ show.teaser }}</p>

                        <div class="buttonBox flex justifyEnd marTop20">
                            <ButtonJumpingDots textColor="dark" :url="`/spectacles/${show.slug}`" />
                        </div>

                        <NuxtLink to="/agenda" class="agendaBtn centered">
                            <span class="icon">
                                event
                            </span>
                        </NuxtLink>
                    </div>

                    <img :src="`${directusAssets}${show.poster}`" alt="alt">
                </div>
            </article>
        </template>
    </PageMain>
</template>

<style scoped>
article {
    padding: 30px 6px;
}

img {
    width: min(400px, 100%);
    box-shadow: -2px 0px 15px rgba(0, 0, 0, 0.512);
}
* {
    color: rgb(0, 75, 82);
}
.title {
    font-family: 'Cormorant', serif;
    font-size: 90px;
    font-weight: 500;
    line-height: 1;
    transform: translateX(-5px);
}
.smallTitleFont {
    font-size: clamp(5rem, 7vw + 0.1rem, 7rem);
}
.age {
    font-size: 16px;
    line-height: 1;
}
.textBox {
    width: min(100ch, 100%);
    padding: 40px 10%;
    /* background-color: rgb(211, 211, 211); */
    background-color: var(--brand-color-1);
}
.bodyText1 {
    margin-top: 40px;
}

.agendaBtn {
    height: 48px;
    width: 48px;
    font-size: 32px;
    border-radius: 5px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    line-height: 1;
    transition: 300ms ease;
}
.agendaBtn:hover {
    font-weight: 500;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.178);
    transition: 300ms ease;
}
</style>