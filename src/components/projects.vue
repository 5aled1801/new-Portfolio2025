<template>
    <v-container class="text-white relative" id="Projects">
        <v-row>
            <h1 class="text-h2 text-center my-2 py-16 w-100">Projects</h1>
        </v-row>
        <v-row>
            <v-col cols="12" md="4" class="mb-4">
                <v-card class="bg-primary lighten-5">
                    <v-card-title>E-commerce</v-card-title>
                    <div class="ph">
                        <img src="@/assets/images/e-commerce.png" alt="E-commerce" class="card-image">

                    </div> <v-card-actions class="justify-center">
                        <v-btn color="white" @click="openLink('https://e-commerce-8821b.web.app')" target="_blank">
                            Live
                            Demo</v-btn>
                        <v-btn color="white"
                            @click="openLink('https://github.com/5aled1801/E-commerce-Using-vue3/tree/main/vue-project')"
                            target="_blank">Source Code</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12" md="4" class="mb-4">
                <v-card class="bg-primary lighten-5">
                    <v-card-title>Movies</v-card-title>
                    <div class="ph">
                        <img src="@/assets/images/movies.png" alt="Movies" class="card-image">

                    </div> <v-card-actions class="justify-center">
                        <v-btn color="white" @click="openLink('https://movies-7e7af.web.app')" target="_blank">Live
                            Demo</v-btn>
                        <v-btn color="white" @click="openLink('https://github.com/5aled1801/MoviesApp')"
                            target="_blank">Source Code</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12" md="4" class="mb-4">
                <v-card class="bg-primary lighten-5">
                    <v-card-title>Weather</v-card-title>
                    <div class="ph">
                        <img src="@/assets/images/weather.png" alt="Weather" class="card-image">

                    </div> <v-card-actions class="justify-center">
                        <v-btn color="white" @click="openLink('https://weather-1d634.web.app/')" target="_blank">Live
                            Demo</v-btn>
                        <v-btn color="white" @click="openLink('https://github.com/5aled1801/Weather')"
                            target="_blank">Source Code</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12" md="4" class="mb-4">
                <v-card class="bg-primary lighten-5">
                    <v-card-title>Restaurant System</v-card-title>
                    <div class="ph">
                        <img src="@/assets/images/restaurant.png" alt="Restaurant System" class="card-image">

                    </div> <v-card-actions class="justify-center">
                        <v-btn color="white" @click="openLink('https://weather-1d634.web.app/')" target="_blank">Live
                            Demo</v-btn>
                        <v-btn color="white" @click="openLink('https://github.com/5aled1801/Resturant-system')"
                            target="_blank">Source Code</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12" md="4" class="mb-4">
                <v-card class="bg-primary lighten-5">
                    <v-card-title>Get repo by username</v-card-title>
                    <div class="ph">
                        <img src="@/assets/images/getRepo.png" alt="Get repo by username" class="card-image">

                    </div> <v-card-actions class="justify-center">
                        <v-btn color="white" @click="openLink('https://get-repo-31fcb.web.app')" target="_blank">Live
                            Demo</v-btn>
                        <v-btn color="white"
                            @click="openLink('https://github.com/5aled1801/Get-repository-using-username')"
                            target="_blank">Source Code</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12" md="4" class="mb-4">
                <v-card class="bg-primary lighten-5">
                    <v-card-title>Yummy</v-card-title>
                    <div class="ph">
                        <img src="@/assets/images/yummy.png" alt="Yummy" class="card-image">

                    </div> <v-card-actions class="justify-center">
                        <v-btn color="white" @click="openLink('https://5aled1801.github.io/Yummy/')"
                            target="_blank">Live Demo</v-btn>
                        <v-btn color="white" @click="openLink('https://github.com/5aled1801/Yummy')"
                            target="_blank">Source Code</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12" md="4" class="mb-4">
                <v-card class="bg-primary lighten-5">
                    <v-card-title>Extra Team</v-card-title>
                    <div class="ph">
                        <img src="@/assets/images/extraTeam.png" alt="Extra Team" class="card-image">

                    </div> <v-card-actions class="justify-center">
                        <v-btn color="white" @click="openLink('https://5aled1801.github.io/Extra-Team/')"
                            target="_blank">Live Demo</v-btn>
                        <v-btn color="white" @click="openLink('https://github.com/5aled1801/Extra-Team')"
                            target="_blank">Source Code</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12" md="4" class="mb-4">
                <v-card class="bg-primary lighten-5">
                    <v-card-title>Gym</v-card-title>
                    <div class="ph">
                        <img src="@/assets/images/gym.png" alt="Gym" class="card-image">

                    </div> <v-card-actions class="justify-center">
                        <v-btn color="white" @click="openLink('https://5aled1801.github.io/Gym/')" target="_blank">Live
                            Demo</v-btn>
                        <v-btn color="white" @click="openLink('https://github.com/5aled1801/gym')"
                            target="_blank">Source Code</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12" md="4" class="mb-4">
                <v-card class="bg-primary lighten-5">
                    <v-card-title>Kasper</v-card-title>
                    <div class="ph">
                        <img src="@/assets/images/template2.png" alt="Kasper" class="card-image">

                    </div>
                    <v-card-actions class="justify-center">
                        <v-btn color="white" @click="openLink('https://5aled1801.github.io/Kasper-template/')"
                            target="_blank">Live Demo</v-btn>
                        <v-btn color="white" @click="openLink('https://github.com/5aled1801/Kasper-template')"
                            target="_blank">Source Code</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>


            <!-- Add more project cards similarly... -->

        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Projects',
    methods: {
        openLink(url) {
            window.open(url, '_blank'); // Open link in a new tab
        },
    },
};
</script>

<style scoped>
.card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 2s ease;
    /* Smooth scroll animation */
}

.v-card {
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    justify-items: center;
    max-height: 450px;
    overflow: hidden;
    /* Important: hide overflow for scrolling effect */
}

.v-card-title {
    text-align: center;
}

.ph {
    width: 90%;
    min-width: 90%;
    max-height: 350px;
    min-height: 300px;
    overflow: hidden;
    position: relative;
}

.ph img {
    width: 100%;
    left: 0;
    transition: transform 4s ease;
}

img:hover {
    transform: translateY(-50%);
}
</style>