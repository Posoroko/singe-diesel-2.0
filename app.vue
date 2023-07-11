<template>
    <div class="" id="appBox">
        <TopPageBoxMain />

        <NuxtLayout />

        <FooterMain />
    </div>
    
</template>

<style ccoped>
#appBox {
    min-height: 100vh;
    background-color: var(--background);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

</style>
