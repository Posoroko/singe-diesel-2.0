<template>
    <nav class="navBar lightText flex justifyBetween relative">
        <div class="logoBox h100">
            <NuxtLink class="logoLink h100 flex alignCenter justifyCenter pointer" to="/">
                <img class="h50" src="/images/logo-long.png" alt="Logo Singe Diésel">
            </NuxtLink>
        </div>

        <div class="menuBox">
            <NavBarMenuBox />
        </div>
    </nav>
</template>

<style>
:root {
    --navBarHeight: 60px;
}
</style>

<style scoped>
.navBar {
    background-color: var(--background-dark);
    height: var(--navBarHeight);
    overflow: visible;
    z-index: 10000; 
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
    height: 100%;
    padding: 8px 20px;
}
</style>