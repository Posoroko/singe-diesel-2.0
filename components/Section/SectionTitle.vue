<script setup>
const props = defineProps({
    title: String
})
</script>
<template>
    <div class="titleBox flex">
        <h1 class="sectionTitle bodyTitle lightText">{{ title }}</h1>
    </div>
</template>

<style scoped>
.titleBox {
    /* padding: 20px 20px 20px 10vw; */
    margin: 40px 20px 60px 10vw;
}
.sectionTitle {
    
    position: relative;
}
.sectionTitle:before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 25%;
    height: 18px;
    background-color: rgba(255, 255, 255, 0.455);

}
.sectionTitle:after {
    content: "";
    position: absolute;
    top: calc(100% + 4px);
    left: 12px;
    width: 80%;
    height: 10px;
    background-color: rgba(255, 255, 255, 0.255)

}

</style>