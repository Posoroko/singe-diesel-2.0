<template>
    <footer class="flex alignCenter justifyCenter flex gap20">
        <img class="footerLogo" src="/images/logo-square.webp" alt="">

        <div class="FooterLinkBox lightText flex column justifyCenter">
            <NuxtLink to="/contact">                
                <span>contact</span>    
            </NuxtLink>

            <NuxtLink to="/mentions-legales">
                <span>mentions légales</span>
            </NuxtLink>

            <a href="https://monsieuredgar.com">
                <span>monsieuredgar.com</span>
            </a>

            <a href="https://posoroko.com">
                <span>posoroko.com</span>
            </a>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: var(--background-dark);
    padding: 100px 20px 50px 20px;
    margin-top: 50px;
}
.footerLogo {
    width: clamp(90px, 10vw, 150px);
}
.FooterLinkBox *{
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.6rem, 2.5vw + 0.1rem, 1.8rem);
    font-weight: 300;
    cursor: pointer;
}
</style>