<script setup>
const props = defineProps({
    link: String
})
</script>

<template>
    <div class="h100 flex">
        <div class="button skewedButton pointer">
            <NuxtLink class="link block darkText flex justifyCenter gap5" :to="link">
                <span class="text">découvrir </span>
                <span class="text dot dot1">.</span>
                <span class="text dot dot2">.</span>
                <span class="text dot dot3">.</span>
            </NuxtLink>
        </div>
    </div>
</template>

<style setup>

.button {
    position: relative;
    isolation: isolate;
    
}

.skewedButton::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--brand-color-2);
    transform: skew(var(--button-skew));
    z-index: -1;
    transition: 300ms ease;
}
.skewedButton::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: -2px;
    left: -2px;
    background-color: var(--brand-color-1);
    background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
    transform: skew(var(--button-skew));
    z-index: -1;
    transition: 300ms ease;
}
.skewedButton:hover::after,
.skewedButton:hover::before {
    border-top-right-radius: 25px;
    transition: 300ms ease;
}

.link {
    font-size: 2.0rem;
    padding: 0.5em 0.8em;
    font-family: 'Poppins';
    filter: blur(0.3px);
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
.dot1 {
    animation-delay: 0ms;
}
.dot2 {
    animation-delay: 50ms;
}
.dot3 {
    animation-delay: 100ms;
}
.button:hover .link .dot {
    animation-name: dotJump;
}


@keyframes dotJump {
    0% {transform: translateY(0px);}
    25% {transform: translateY(-5px);}
    50% {transform: translateY(0px);}
}
</style>