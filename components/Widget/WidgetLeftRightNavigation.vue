<script setup>
const props = defineProps({
    numberOfItems: Number,
    leftNavPossible: Boolean,
    rightNavPossible: Boolean
})
</script>

<template>
    <div class="navFullBox absolute top0 r left0 bottom0 right0">
        <div class="arrow arrowLeft left0 lightText">
            <span class="icon">chevron_left</span>
        </div>
        <div class="arrow arrowRight right0 lightText">
            <span class="icon">chevron_right</span>
        </div>
    </div>
</template>

<style scoped>
.arrow {
    width: 48px;
    height: 48px;
    margin: 0 10px;
    border-radius: 5px;
    display: grid;
    place-items: center;
    position: absolute;
    top: 50%;
    translate: 0 -50%;
    cursor: pointer;
    background-color: var(--brand-color-2);
}
.arrow .icon {
    font-size: 48px;
    line-height: 1em;
}
</style>