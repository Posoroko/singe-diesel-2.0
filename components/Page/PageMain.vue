<script setup>

</script>

<template>
    <header>
        <NavBarMain />
        <slot name="headerImage">


        </slot>
    </header>

    <main>
        <slot name="main">

        </slot>
    </main>
</template>

<style>
header {
    width: 100%;
}
header .headerImage_large {
    width: 100%;
    height: calc(100vh - var(--navBarHeight));
    object-fit: cover;
}
header .headerImage_small {
    width: 100%;
    height: calc(60vh - var(--navBarHeight));
    object-fit: cover;
}
</style>

<style scoped>
main {
    padding: clamp(5px, 2vw, 10px);
}

</style>