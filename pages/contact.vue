<template>
    <PageMain>
        <template #headerImage>
    
        </template>

        <template #main>
            <div class="narrowWidth">
                <SectionTitle title="Contact" />

                <address class="contactBox">
                    <p class="bodyText1">Compagnie Singe Diesel</p>
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
.contactBox {
    padding: 40px 20px;
    border-bottom: 1px solid var(--brand-color-1);
}

.contactBox * {
    color: white;
}
</style>