<script setup>
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        fields: 'id, sueno, kazu, metaphores',
    }
}

const { data: agenda } = await useAsyncData(
    "agendaText",
    async () => {
        const items = await $fetch(`${directusItems}Agenda_text`, fetchOptions)

        return items.data
    }
    ,
    { server: true }
)
const shows = [
    { title: "Sueno", slug: "sueno" },
    { title: "Kazu", slug: "kazu"},
    { title: "Chemin des métaphores", slug: "metaphores"}
]
</script>

<template>
    <PageMain v-if="agenda">
        <template #headerImage>
             <div class="mainWidth">
                <SectionTitle title="agenda" />
            </div>
        </template>

        <template #main>
            <ul >
                <li v-for="show in shows" :key="show.slug" class="agendaBox mainWidth">
                    <div v-if="agenda[show.slug]">
                        <h3 class="bodyTitle lightText" >{{ show.title }}</h3>

                        <p class="agendaContent bodyText1 lightText">
                            {{ agenda[show.slug] }}
                        </p>
                    </div>
                </li>
            </ul>
        </template>
    </PageMain>
</template>

<style setup>
.agendaContent {
    white-space: pre-wrap;
    padding-left: min(5vw, 50px);
    line-height: 1.8;
    margin-top: 30px;
}
</style>