<script setup>

</script>

<template>
    <SeoKit />
    <div class="" id="appBox">

        <NuxtPage />

        <FooterMain />
    </div>
    
</template>

<style ccoped>
html {
    background-color: rgb(17, 17, 17);
}
#appBox {
    width: min(100%, 1920px);
    margin: 0 auto;
    min-height: 100vh;
    background: radial-gradient(circle, rgb(21, 40, 41) 0%, rgb(25, 36, 41) 100%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
}

</style>
