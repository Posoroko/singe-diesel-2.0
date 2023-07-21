<script setup>
const props = defineProps({
    textColor: String,
    text: String,
    url: String
})
</script>

<template>
    <div class="button relative pointer">
        <NuxtLink class="link block bodyText1 flex justifyCenter gap5" :class="textColor" :to="url">
            <span v-if="text">{{ text }}</span>
            <span v-else class="text">découvrir </span>
            <span class="text dot dot1">.</span>
            <span class="text dot dot2">.</span>
            <span class="text dot dot3">.</span>
        </NuxtLink>
    </div>
</template>

<style scoped>
.link.dark {
    color: rgb(0, 75, 82);
}
.link.light {
    color: white;
}
.button {
    padding: 5px 20px 5px 10px;
}
.button::before,
.button::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 2px;
    transition: 300ms ease;
}
.button::before {
    width: 0%;
    background-color: var(--brand-color-2);
    left: 0;
    transition: 300ms ease;
}
.button::after {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.359);
    right: 0;
    transition: 300ms ease;
}
.button:hover::before {
    width: 100%;
    transition: 300ms ease;
}
.button:hover::after {
    width: 0%;
    transition: 300ms ease;
}
.dot {
    letter-spacing: 2px;
    position: relative;
    display: inline-block;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}
.button:hover .link .dot {
    animation-name: dotJump;
}
.dot1 {
    animation-delay: 0ms;
}
.dot2 {
    animation-delay: 50ms;
}
.dot3 {
    animation-delay: 100ms;
}


@keyframes dotJump {
    0% {transform: translateY(0px);}
    25% {transform: translateY(-5px);}
    50% {transform: translateY(0px);}
}
</style>