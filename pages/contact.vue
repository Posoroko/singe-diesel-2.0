<template>
    <PageMain>
        <template #headerImage>
    
        </template>

        <template #main>
            <div class="narrowWidth">
                <SectionTitle title="Contact" />

                <address class="contactBox">
                    <p class="bodyText2">Compagnie Singe Diesel</p>
                    <p class="bodyText1">18, rue Saint-Valentin</p>
                    <p class="bodyText1">29820 Guilers, France </p>
                </address>

                <div class="contactBox">
                    <p class="bodyText1">informations :</p>

                    <a href="mailto:singediesel@gmail.com" class="bodyText2 marTop20 pointer">singediesel@gmail.com</a>
                </div>

                <div class="contactBox">
                    <p class="bodyText1">diffusion :</p>

                    <a href="mailto:all.et.compagnies@gmail.com" class="bodyText2 marTop20 pointer">all.et.compagnies@gmail.com</a>
                </div>
            </div>
        </template>
    </PageMain>
</template>

<style scoped>
.narrowWidth {
    padding: 50px 0;
}
.contactBox {
    border-bottom: var(--box-border);
}
.contactBox {
    margin-top: 20px;
    padding-left: 10px;
    padding-bottom: 20px;
}
.contactBox * {
    color: white;
    margin-top: 10px;
}
</style>