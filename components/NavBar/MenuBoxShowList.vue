<script setup>
const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        fields: 'id, mainTitle, title, multiVersions, slug',
    }
}

const { data: shows } = await useAsyncData(
    "menuShows",
    async () => {
        const items = await $fetch(`${directusItems}Shows`, fetchOptions)

        return items.data
    }
    ,
    { server: true }
)
</script>

<template>
    <NuxtLink class="menuLink" to="/spectacles"  @click="closeMenu">
        <span class="icon">arrow_right</span>
        <span>les spectacles</span>
    </NuxtLink>

    <NuxtLink v-for="show in shows" class="menuLink extraLeftPadding" :to="`/spectacles/${show.slug}`"  @click="closeMenu">
        <span class="icon">arrow_right</span>
        <span v-if="!show.multiVersions">{{ show.title }}</span>
        <span v-else>{{ show.mainTitle }}</span>
    </NuxtLink>
</template>