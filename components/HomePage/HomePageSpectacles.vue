<script setup>

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        fields: 'id, title, mainTitle, poster, slug' 
    }
}

const { data: shows } = await useAsyncData(
    "shows",
    async () => {
        const items = await $fetch(`${directusItems}Shows`, fetchOptions)

        return items.data
    }
    ,
    { server: true }
)
const numberOfShows = shows.length

</script>

<template>
    <section>
        <div class="mainWidth relative">
            <div class="titleBox mainWidth">
                <SectionTitle title="Spectacles" />
            </div>

            <ul class="drawer flex justifyCenter alignStart wrap">
                <li class="showBox" v-for="show in shows" :key="show.id">
                
                    <NuxtLink class="showImageLink" :to="`/spectacles/${show.slug}`">
                        <img class="showImage" :src="`${directusAssets}${show.poster}?key=width250`" :alt="`Affiche du spectacle ${show.title} de la compagnie Singe Diesel`">
                    </NuxtLink>
                    
                    <NuxtLink class="showTitleLink pointer" :to="`/spectacles/${show.slug}`">                    
                        <h2 class="showTitle poppins lightText">{{ show.title || show.mainTitle }}</h2>
                    </NuxtLink>
                    
                </li>
            </ul>

            <div class="buttonBox flex justifyEnd marTop50">
                <ButtonJumpingDots text="découvrir les spectacles" textColor="light" url="/spectacles" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.drawer {
    gap: 3vw;
}
.showBox {
    width: min(250px, 90vw);
    aspect-ratio: 3/4;
    transition: 600ms ease;
}
.showImageLink {
    width: 100%;
    height: 100%;
    display: block;
    cursor: pointer;
}

.showImageLink:hover .showImage{
    transform: scale(1.02);
    transition: 300ms ease;
    box-shadow: 0 0 5px rgb(0, 0, 0);
}
.showBox:nth-child(2n+1):hover{
    rotate: 1deg;
    transition: 300ms ease;
}
.showBox:nth-child(2n+2):hover{
    rotate: -1deg;
    transition: 300ms ease;
}
.showImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    transform: scale(1);
    transition: 600ms ease;
}
.showTitleLink:hover .showTitle {
    font-weight: 500;
    transition: 300ms ease;
}
.showTitle {
    font-size: 2.2rem;
    font-weight: 200;
    text-align: center;
    padding: 10px 0;
    transition: 150ms ease;
}

</style>