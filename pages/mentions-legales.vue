<script setup>
const client = {
    name: "Compagnie Singe Diesel",
    email: "singediesel@gmail.com",
    phone: null,
    address: {
        line1: "18, rue Saint-Valentin",
        line2: "29820 Guilers, France",
    },
    siteUrl: "http://singediesel.org"
}
</script>

<template>
    <PageMain>
            <template #headerImage>
                <div class="mainWidth">
                    <SectionTitle title="Mentions légales" />
                </div>
            </template>

            <template #main>
                <div class="mainWidth flex column gap30">
                    <h2 class="bodyText1">Ce site internet est la propriété de Singe Diesel : </h2>

                    <address class="bodyText1">
                        <b>Compagnie Singe Diesel</b> <br>
                        {{ client.address.line1 }}<br>
                        {{ client.address.line2 }}<br>
                        {{ client.email }}<br>
                    </address>

                    <p> <b>Directeur de publication :</b> Jean-Marie Songeur</p>

                    <div>
                        <h3 class="bodyTitle">Design et Développement</h3>
                        <address class="bodyText1">
                            Monsieur Edgar, un service de Studio Posoro<br>
                            24, rue de Kerven – 29270 Carhaix​<br>
                            06 95 07 12 64<br>
                            eric@posoroko.com<br>
                            <a class="underline pointer" href="https://www.posoroko.com" target="_blank">https://www.posoroko.com</a><br>
                        </address>
                    </div>

                    <div>
                        <h2 class="bodyTitle">DROITS DE REPRODUCTION </h2>
                        <p class="bodyText1">
                            Ce site est protégé par la législation française et internationale par le droit d’auteur et la propriété intellectuelle. Toute copie, représentation, adaptation, diffusion, intégrale ou partielle, du contenu du site est illicite à l’exception d’une unique copie réservée à l’usage privé de l’utilisateur. Les informations contenues dans ce site sont présentées à titre purement informatif et sont non contractuelles. <b>{{ client.name }}</b> ne saurait être tenue responsable pour toute erreur ou omission dans les textes et illustrations du site. Toute représentation et/ou reproduction et/ou exploitation partielle ou totale de ce site, par quelques procédés que ce soit, sans l’autorisation expresse et préalable de <b>{{ client.name }}</b> sont interdites et constitueraient une contrefaçon au sens des articles L 335-2 et suivants du code de la propriété intellectuelle.
                        </p>
                    </div>

                    <div>
                        <h2 class="bodyTitle">PROTECTION DES DONNÉES PERSONNELLES </h2>
                        <p class="bodyText1">
                            Conformément au Règlement (UE) 2016/679 relatif à la protection des données à caractère personnel et à
                            la loi n°78/17 du 6 janvier 1978
                            modifiée, vous disposez des droits suivants sur vos données personnelles, et notamment : le droit
                            d’accéder, et de faire rectifier vos données,
                            le droit à l’effacement, à la limitation du traitement, et le droit de vous opposer à tout moment au
                            traitement de vos données pour des motifs
                            tenant à votre situation particulière. Pour exercer vos droits, merci d’adresser votre demande à :
                            <b>{{ client.email }}</b>
                        </p>
                    </div>

                    <div>
                        <h2 class="bodyTitle">ABSENCE DE GARANTIE</h2>
                        <p class="bodyText1">
                            Nous mettons en place tous les moyens nécessaires pour vous apporter une information fiable et
                            actualisée. Cependant, malgré le soin que nous apportons à la mise à jour de ce site, des erreurs ou omissions peuvent être présentes. En
                            conséquence, l’éditeur ne peut être tenu responsable. Nous ne garantissons pas le contenu des sites Internet vers lesquels nous pointons.
                        </p>
                    </div>

                    <div>
                        <h2 class="bodyTitle">LIEN </h2>
                        <p class="bodyText1">
                            Certaines pages peuvent contenir des liens vers des sites externes à ce site. <b>Synthèse Electric</b> ne
                            réalise pas de contrôle sur ces sites, par conséquent, elle n’assume aucune responsabilité quant à la disponibilité de ces sites, leurs
                            contenus, publicités, produits ou services disponibles à partir de ces sites. L’accès à d’autres sites externes au site
                            <b>{{ client.siteUrl }}</b> se fait donc sous l’entière responsabilité de l’utilisateur qui les consulte.
                        </p>
                    </div>
                </div>
            </template>
        </PageMain>
</template>

<style scoped>
* {
    color: white;
}
.bodyTitle1 {
    margin-top: 10px;
}
</style>