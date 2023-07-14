<script setup>
const route = useRoute()

const appConfig = useAppConfig();
const directusAssets = appConfig.directus.assets;
const directusItems = appConfig.directus.items;

const fetchOptions = {
    server: true,
    params: {
        // fields: 'id, title, poster, teaser, slug',
    }
}

const { data: images } = await useAsyncData(
    "galery",
    async () => {
        const items = await $fetch(`${directusItems}Galery`, fetchOptions)

        return items.data
    }
    ,
    { server: true }
)

const selectedImageIndex = ref(null)

const modalIsOpen = ref(false)

function handleImageclick(e) {
    selectedImageIndex.value = e.target.dataset.index
    modalIsOpen.value = true
}
function closeModal() {
    modalIsOpen.value = false
}

function navigate(direction) {
    console.log(selectedImageIndex.value)
    if(direction === 'left' && selectedImageIndex.value > 0) {
        selectedImageIndex.value--
    } else if(direction === 'right' && selectedImageIndex.value < images.value.length - 1){
        selectedImageIndex.value++
    }
}

</script>

<template>
    <PageMain>
        <template #headerImage>

        </template>

        <template #main>

            <img class="pointer" 
                v-for="(image, index) in images" 
                :src="`${directusAssets}${image.image}`" 
                :alt="`${image.alt}`"
                :data-index="index"
                @click="handleImageclick">

            <div class="modal r" v-if="modalIsOpen">
                <div class="modalContent centered pad20">
                    <span class="close lightText" @click="closeModal">&times;</span>

                    <img class="objectFitContain" :src="`${directusAssets}${images[selectedImageIndex].image}`" :alt="images[selectedImageIndex].alt">

                    <WidgetLeftRightNavigation @navigate="navigate" />
                </div>
            </div>    
        </template>

    </PageMain>
</template>

<style scoped>
.modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    padding: max(5vw, 10px);
    background-color: #0000005d;
    backdrop-filter: blur(5px);
}
.modalContent {
    width: 100%;
    height: 100%;
    background-color: var(--background);
    border-radius: 10px;
    box-shadow: 1px 1px 10px #00000097;
    position: relative;
}
.close {
    width: 48px;
    height: 48px;
    font-size: 40px;
    line-height: 1;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    display: grid;
    place-items: center;
}
.close:hover {
    rotate: 360deg;
    transition: 300ms ease;
}
</style>