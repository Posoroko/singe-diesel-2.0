<script setup>
const route = useRoute()

</script>

<template>
    <div id="topPageBox" class="flex column" :class="{ 'h100vh' : route.path == '/'}">
        <TopPageBoxNavBarMain />

        <TopPageBoxHeaderMain />
    </div>
</template>

<style soped>

</style>