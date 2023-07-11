<template>
    <nav class="navBar lightText flex justifyBetween">
        <div class="logoBox h100">
            <NuxtLink class="logoLink h100 flex alignCenter justifyCenter pointer" to="/">
                <img class="h50" src="/images/logo-long.png" alt="Logo Singe Diésel">
            </NuxtLink>
        </div>

        <div class="menuBox">
            <TopPageBoxNavBarMenuBox />
        </div>
    </nav>
</template>

<style scoped>
.navBar {
    background-color: var(--background-dark);
    height: 48px;
    overflow: visible;
    z-index: 1000; 
}
.logoLink img{
    transform: scale(1);
    transition: 300ms ease;
}
.logoLink:hover  img{
    transform: scale(1.1);
    transition: 300ms ease;
}
.logoBox{
    padding-left: 20px;
}
</style>