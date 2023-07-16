<script setup>
const route = useRoute()
const menuIsOpen = ref(false)

function toggleMenu() {
    if(menuIsOpen.value) {
        menuIsOpen.value = false
    } else {
        menuIsOpen.value = true
    }

    console.log(menuIsOpen.value)
}

const openTab = ref('null')

function toggleTabs(tab) {
    if(openTab.value == tab) {
        openTab.value = 'null'
    } else {
        openTab.value = tab
    }
}

function closeMenu() {
    menuIsOpen.value = false
    openTab.value = 'null'
}



</script>

<template>
    <div class="menuBox lightText relative">

        <div class="menuButton main" @click="toggleMenu">
            <span class="chevronBox centered" :class="{ 'open': menuIsOpen }">
                <WidgetChevron direction="right" />
            </span>
            
            <div class="menuButtonText relative" :class="{ 'open': menuIsOpen }">
                <span class="h100 text menu absolutlyCentered">menu</span>
                <span class="h100 text close">fermer</span>
            </div>
            
            <span class="chevronBox centered" :class="{ 'open': !menuIsOpen }">
                <WidgetChevron direction="left" />
            </span>
        </div>

        <div class="tabBox" :class="{ 'open' : menuIsOpen }">
            <div class="flex column">
                <div class="menuButton flex gap5" @click="toggleTabs('about')" :class="{ 'open': openTab == 'about' }">
                    <div class="text">à propos</div>
                    
                    <div class="menuTabIconBox centered h100">
                        <WidgetChevron class=""  v-if="openTab != 'about'" direction="down"/>
                        
                        <WidgetCloseButton v-else />
                    </div>
                </div>

                <div class="contentBox" :class="{ 'open' : openTab == 'about' }">
                    <NuxtLink class="menuLink" to="/la-compagnie" @click="closeMenu">
                        <span class="icon">arrow_right</span>
                        <span>la compagnie</span>
                    </NuxtLink>

                    <NuxtLink class="menuLink" to="/juan-perez-escala"  @click="closeMenu">
                        <span class="icon">arrow_right</span>
                        <span>Juan Perez-Escala</span>
                    </NuxtLink>

                    <NuxtLink class="menuLink" to="/equipe-artistique"  @click="closeMenu">
                        <span class="icon">arrow_right</span>
                        <span>équipe artistique</span>
                    </NuxtLink>

                    <NuxtLink class="menuLink" to="/contact"  @click="closeMenu">
                        <span class="icon">arrow_right</span>
                        <span>contact</span>
                    </NuxtLink>
                </div>
            </div>

            <div class="flex column">
                <div class="menuButton flex gap5" @click="toggleTabs('creations')" :class="{ 'open': openTab == 'creations' }">
                    <span class="text">créations</span>

                    <div class="menuTabIconBox centered h100">
                        <WidgetChevron class=""  v-if="openTab != 'creations'" direction="down"/>
                    
                        <WidgetCloseButton v-else />
                    </div>
                </div>

                <div class="contentBox" :class="{ 'open': openTab == 'creations' }">
                    <NuxtLink class="menuLink" to="/galerie"  @click="closeMenu">
                        <span class="icon">arrow_right</span>
                        <span>galerie</span>
                    </NuxtLink>

                    <NavBarMenuBoxShowList @closeMenu="closeMenu" />
                </div>
            </div>

            <div class="flex column">
                <div class="menuButton agenda" @click="toggleTabs('agenda')" :class="{ 'open': route.path == '/agenda' }">
                    <NuxtLink class="text" to="/agenda" @click="closeMenu">agenda</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.menuTabIconBox {
    /* width: 40px; */
    height: 100%;
}

.menuLink .icon {
    width: 20px;
    color: transparent;
    display: grid;
    place-items: center;
}
.menuLink:hover .icon {
    color: var(--brand-color-1);
}
.menuLink {
    font-family: var(--body-font);
    font-size: clamp(1.6rem, 2vw + 0.1rem, 2.0rem);
    font-weight: 300;
    cursor: pointer;
    display: flex;
}
.menuLink {
    align-items: center;
    line-height: 0;
    padding: 0;
    opacity: 0;
    transition: 500ms ease;
}

.contentBox.open .menuLink{
    line-height: 1.5;
    opacity: 1;
    transition: 500ms ease;
    padding: 3px 0;
}
</style>

<style scoped>

.menuButton {
    height: 60px;
    font-size: clamp(1.6rem, 2vw + 0.1rem, 2.0rem);
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
}
.menuButton.agenda {
    padding: 0 40px;
}
.menuButton:hover {
    background-color: var(--background);
}
.menuButton .text {
    display: grid;
    place-items: center;
}
.menuButtonText .menu,
.menuButtonText.open .close {
    opacity: 1;
    transition: 500ms ease;
}
.menuButtonText.open .menu,
.menuButtonText .close {
    opacity: 0;
    transition: 500ms ease;
}
.menuButton::after {
    position: absolute;
    content: '';
    width: 0%;
    height: 2px;
    background-color: white;
    bottom: 0;
    left: 0;
    transition: 500ms ease;
}
.menuButton:hover::after,
.menuButton.open::after {
    width: 100%;
    background-color: var(--brand-color-2);
    transition: 500ms ease;
}

.tabBox {
    display: flex;
}
    
@media screen and (max-width: 767px) {
    .menuButton.main {
        display: flex;
        padding: 0 20px;
    }
    .tabBox {
        width: 300px;
        z-index: 1000;
        background-color: rgb(44, 44, 44);
        position: absolute;
        top: 100%;
        left: 100%;
        flex-direction: column;
        transform: translateX(0%);
        transition: 500ms ease;
    }
    .tabBox.open {
        transform: translateX(-100%);
        transition: 500ms ease;
    }
    
}
@media screen and (min-width: 768px) {
    .menuButton.main {
        display: none;
    }
    .tabBox {
        /* padding-right: 20px; */
        flex-direction: row;
    }
}
.chevronBox {
    width: 0px;
    transition: 500ms ease;
    overflow: hidden;
}
.chevronBox.open {
    width: 20px;
    transition: 500ms ease;
}
.contentBox {
    opacity: 0;
    pointer-events: none;
    background-color: var(--background-dark);
    padding: 0px 20px 0px 0;
    transition: 500ms ease;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.contentBox.open {
    opacity: 1;
    pointer-events: all;
    transition: 500ms ease;
    padding: 10px 20px 10px 0;
}


</style>