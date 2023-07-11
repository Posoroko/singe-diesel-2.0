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
    console.log(openTab.value)
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
            
            <span class="h100 text ">menu</span>
            
            <span class="chevronBox centered" :class="{ 'open': !menuIsOpen }">
                <WidgetChevron direction="left" />
            </span>
        </div>

        <div class="tabBox" :class="{ 'open' : menuIsOpen }">
            <div class="flex column">
                <div class="menuButton" @click="toggleTabs('about')" :class="{ 'open': openTab == 'about' }">
                    <span class="text">à propos</span>
                    <WidgetChevron direction="down" />
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
                <div class="menuButton" @click="toggleTabs('creations')" :class="{ 'open': openTab == 'creations' }">
                    <span class="text">créations</span>
                    <WidgetChevron direction="down" />
                </div>

                <div class="contentBox" :class="{ 'open': openTab == 'creations' }">
                    <NuxtLink class="menuLink" to="/galerie"  @click="closeMenu">
                        <span class="icon">arrow_right</span>
                        <span>galerie</span>
                    </NuxtLink>

                    <NuxtLink class="menuLink" to="/spectacles"  @click="closeMenu">
                        <span class="icon">arrow_right</span>
                        <span>les spectacles</span>
                    </NuxtLink>

                    <NuxtLink class="menuLink extraLeftPadding" to="/spectacles/sueno"  @click="closeMenu">
                        <span class="icon">arrow_right</span>
                        <span>Sueno</span>
                    </NuxtLink>

                    <NuxtLink class="menuLink extraLeftPadding" to="/spectacles/kazu"  @click="closeMenu">
                        <span class="icon">arrow_right</span>
                        <span>Kazu</span>
                    </NuxtLink>

                    <NuxtLink class="menuLink extraLeftPadding" to="/spectacles/metaphores"  @click="closeMenu">
                        <span class="icon">arrow_right</span>
                        <span>Métaphores</span>
                    </NuxtLink>
                </div>
            </div>

            <div class="flex column">
                <div class="menuButton" @click="toggleTabs('agenda')" :class="{ 'open': route.path == '/agenda' }">
                    <NuxtLink class="text" to="/agenda">agenda</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.menuButton {
    height: 48px;
    font-size: clamp(1.6rem, 2vw + 0.1rem, 2.0rem);
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    padding: 0 20px;
    cursor: pointer;
    position: relative;

    display: flex;
    align-items: center;
}
.menuButton .text {
    display: grid;
    place-items: center;
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
    background-color: var(--brand-color-1);
    transition: 500ms ease;
}

.tabBox {
    display: flex;
}
    
@media screen and (max-width: 767px) {
    .menuButton.main {
        display: flex;
    }
    .tabBox {
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
    height: 0px;
    background-color: var(--background-dark);
    padding: 0 20px 0 10px;
    transition: 500ms ease;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
}
.contentBox.open {
    height: 210px;
    transition: 500ms ease;
    padding: 10px 20px 10px 10px;
}

.menuLink {
    font-family: var(--body-font);
    font-size: clamp(1.6rem, 2vw + 0.1rem, 2.0rem);
    font-weight: 300;
    cursor: pointer;
    display: flex;
    align-items: center;
}
.menuLink .icon {
    color: transparent;
}
.menuLink:hover .icon {
    color: var(--brand-color-1);
}
.extraLeftPadding {
    padding-left: 20px;
}
</style>