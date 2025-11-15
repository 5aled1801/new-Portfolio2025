<template>
    <v-container class="text-white relative" id="Skills">
        <v-row class="align-center justify-space-between absolute fil mt-16">
            <h1 class="text-h2 text-center my-2 py-16 w-100">Skills</h1>
        </v-row>

        <v-row>
            <!-- Use `cols="6" md="4"` to control the number of columns on mobile vs desktop -->
            <v-col class="text-center" cols="6" md="4">
                <img src="./../assets/images/javascript-logo-javascript-icon-transparent-free-png.webp"
                    :style="{ maxWidth: '400px' }" class="mx-auto my-4" loading="lazy" />
                <div class="mt-2">
                    <h4>JavaScript </h4>
                </div>
            </v-col>
            <v-col class="text-center" cols="6" md="4">
                <img src="./../assets/images/vue.png" :style="{ maxWidth: '400px' }" class="mx-auto my-4"
                    loading="lazy" />
                <div class="mt-2">
                    <h4>Vue.js</h4>
                </div>
            </v-col> <v-col class="text-center" cols="6" md="4">
                <img src="./../assets/images/html5_23329.png" :style="{ maxWidth: '400px' }" class="mx-auto my-4"
                    loading="lazy" />
                <div class="mt-2">
                    <h4>HTML5</h4>
                </div>
            </v-col> <v-col class="text-center" cols="6" md="4">
                <img src="./../assets/images/tailwend.png" :style="{ maxWidth: '400px' }" class="mx-auto my-4"
                    loading="lazy" />
                <div class="mt-2">
                    <h4>Tailwend</h4>
                </div>
            </v-col> <v-col class="text-center" cols="6" md="4">
                <img src="./../assets/images/aaaaaaaaaaa.png" :style="{ maxWidth: '400px' }" class="mx-auto my-4"
                    loading="lazy" />
                <div class="mt-2">
                    <h4>CSS3</h4>
                </div>
            </v-col> <v-col class="text-center" cols="6" md="4">
                <img src="./../assets/images/bbb.png" :style="{ maxWidth: '400px' }" class="mx-auto my-4"
                    loading="lazy" />
                <div class="mt-2">
                    <h4>Bootstrap</h4>
                </div>
            </v-col> <v-col class="text-center" cols="6" md="4">
                <img src="./../assets/images/pinia.png" :style="{ maxWidth: '400px' }" class="mx-auto my-4"
                    loading="lazy" />
                <div class="mt-2">
                    <h4>Pinia</h4>
                </div>
            </v-col> <v-col class="text-center" cols="6" md="4">
                <img src="./../assets/images/ssss.webp" :style="{ maxWidth: '400px' }" class="mx-auto my-4"
                    loading="lazy" />
                <div class="mt-2">
                    <h4>Sass</h4>
                </div>
            </v-col> <v-col class="text-center" cols="6" md="4">
                <img src="./../assets/images/nuxt.webp" :style="{ maxWidth: '400px' }" class="mx-auto my-4"
                    loading="lazy" />
                <div class="mt-2">
                    <h4>Nuxt</h4>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>



<style scoped>
/* Optional: Add styling for responsiveness and alignment */
@media (max-width: 600px) {
    .my-4 {
        margin: 20px 0;
    }
}

.text-center {
    text-align: center;
}

img {
    width: 150px !important;
    height: 150px;
}
</style>
