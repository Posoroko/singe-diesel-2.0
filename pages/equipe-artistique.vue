<script setup>
const team = [
    {
        id: 0,
        name: "Vincent Roudaut",
        role: "Musicien",
        bio: "Il joue de la musique et compose pour le théâtre, le cinéma et la danse. Il a travaillé avec la compagnie depuis 2008, en tant que musicien et compositeur. Il a également travaillé avec la compagnie de danse contemporaine “La Baraka” et le collectif “La Meute”.",
        image: "/images/team/vincent.jpg",
        alt: ""
    },
    {
        id: 1,
        name: "Églantine Quéllier",
        role: "Plasticienne",
        bio: "Il joue de la musique et compose pour le théâtre, le cinéma et la danse. Il a travaillé avec la compagnie depuis 2008, en tant que musicien et compositeur. Il a également travaillé avec la compagnie de danse contemporaine “La Baraka” et le collectif “La Meute”.",
        image: "/images/team/berangere.jpg",
        alt: ""
    },
    {
        id: 2,
        name: "Vincent Bourcier",
        role: "Décorateur",
        bio: "Il joue de la musique et compose pour le théâtre, le cinéma et la danse. Il a travaillé avec la compagnie depuis 2008, en tant que musicien et compositeur. Il a également travaillé avec la compagnie de danse contemporaine “La Baraka” et le collectif “La Meute”.",
        image: "/images/team/vince.jpg",
        alt: ""
    }
]

</script>

<template>
    <div class="pageBox mainWidth">
        <SectionTitle title="L'équipe artistique" />

        <SectionArticle class="marTop50" v-for="friend in team" :key="friend.id" :title="friend.name" :image="friend.image" :alt="friend.alt" :text="friend.bio" :showButton="false"/>
    </div>
</template>

<style scoped>
.pageBox {
    padding: 50px 20px;
}
</style>