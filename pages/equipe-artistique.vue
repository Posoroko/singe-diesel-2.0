<script setup>
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        // fields: 'id, headerImage, paragraph1, paragraph2, paragraph3, paragraph4',
    }
}

const { data: team } = await useAsyncData(
    "team",
    async () => {
        const items = await $fetch(`${directusItems}Team`, fetchOptions)

        return items.data
    }
    ,
    { server: true }
)

</script>

<template>
    <PageMain>
        <template #headerImage>
            <div class="pageBox mainWidth">
                <SectionTitle title="L'équipe artistique" />
            </div>
        </template>

        <template #main>

            <ul class="cardBox mainWidth flex wrap justifyCenter " title="Membres de l'équipe artistique">
                <li class="card" v-for="friend in team" :key="friend.id">
                    <article class="" v-if="friend.showOnline">
                        <div class="imgFrame ">
                            <img class="portrait" :src="`${directusAssets}${friend.image}`" 
                                :alt="`${friend.firstName} ${friend.lastName} de la compagnie Singe Diesel`">
                        </div>

                        <div class="textBox">
                            <div class="marTop20">
                                <h1 class="name ">{{ `${friend.firstName} ${friend.lastName}` }}</h1>
                                <p class="role" v-if="friend.role">{{ friend.role }}</p>
                            </div>

                            <p class=" bodyText1 marTop20" v-if="friend.bio"> {{ friend.bio }}</p>
                        </div>

                        
                    </article>
                </li>
            </ul>
        </template>
    </PageMain>
</template>

<style scoped>
* {
    font-family: 'Poppins', sans-serif;
    color: rgb(0, 75, 82);
}
.cardBox {
    gap: 50px;
}
.card {
    width: min(100%, 300px);
}
article {
    width: 100%;
}
.imgFrame{
    width: 100%;
    aspect-ratio: 3/4;
}
.portrait {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(1.4);
}
.textBox {
    background-color: var(--brand-color-1);
    padding: 20px ;
}
.bodyText2 {
    padding: 10px 0;
}
h1.name {
    font-size: clamp(1.8rem, 2vw + 0.1rem, 2.6rem);
    font-weight: 500;
    line-height: 1;
}
.role {
    font-size: clamp(1.6rem, 2vw + 0.1rem, 2.2rem);
    font-weight: 300;
    line-height: 1;
    margin-top: 5px;
    font-style: italic;
}
</style>