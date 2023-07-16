<script setup>

</script>

<template>
    <header>
        <NavBarMain />
        <slot name="headerImage">


        </slot>

    
    </header>

    <main class="">
        <slot name="main">

        </slot>
    </main>
</template>

<style>
header {
    width: 100%;
    position: relative;
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
/* .headerImage_large,
.headerImage_small {
    margin-bottom: 50px;
} */
</style>

<style scoped>

main {
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(20px, 5vw, 50px);
}
/* main * {
    padding-left: clamp(5px, 2vw, 10px);
    padding-right: clamp(5px, 2vw, 10px); 
} */
</style>