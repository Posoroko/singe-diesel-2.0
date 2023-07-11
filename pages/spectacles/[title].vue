<script setup>
const route = useRoute()
console.log(route.params.title)
</script>

<template>
    <h1>{{route.params.title}}</h1>
</template>
