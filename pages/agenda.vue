<script setup>
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        fields: 'id, showTitle, content',
    }
}

const { data: agenda } = await useAsyncData(
    "agendaText",
    async () => {
        const items = await $fetch(`${directusItems}Agenda_text`, fetchOptions)
        
        items.data.forEach(item => {
            item.content = item.content.split('\n')
        })

        return items.data
    }
    ,
    { server: true }
)

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
                <li v-for="show in agenda" :key="show.id" class="agendaBox mainWidth">
                    <div v-if="show.content.length">
                        <h3 class="bodyTitle lightText pad20" >{{ show.showTitle }}</h3>

                        <p class="agendaContent agendaText lightText"
                            v-for="(line, index) in show.content" :key="index">
                            {{ line }}
                        </p>
                    </div>
                </li>
            </ul>
        </template>
    </PageMain>
</template>

<style setup>

.agendaText {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.2rem, 2vw + 0.1rem, 1.8rem);
    line-height: 1.4;
    font-weight: 200;
    padding-left: 20px;
    margin-top: 10px;
}
</style>