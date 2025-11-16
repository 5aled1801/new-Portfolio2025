<template>
    <v-app style="background: none;">
        <v-container class="text-white relative  app h-screen ">
            <v-row class="align-center justify-space-between absolute fil col-reverse mt-16">
                <!-- Text Section -->
                <v-col cols="12" md="7" class="d-flex align-center justify-center ">
                    <div class="text text-center">
                        <h1 class="text-h3 text-md-h1 bold">Khaled Hassan</h1>
                        <h1 class="text-h4 text-md-h3">Front-End Developer </h1>
                    </div>
                </v-col>

                <!-- Image Section -->
                <v-col cols="12" md="5" class="d-flex align-center justify-center">
                    <img src="./../assets/images/zzzzzzzzz.png" alt="Khaled Hassan" class="w-100 h-50 rounded"
                        loading="lazy">
                </v-col>
            </v-row>
        </v-container></v-app>
</template>

<script setup>
// استخدام الـ import لتحميل الصورة
// import myImage from '@/assets/images/WhatsApp_Image_2025-01-30.jpg' // استخدم المسار الصحيح هنا
</script>
<style scoped>
.v-application__wrapper,
.v-layout {
    background-color: none !important;
}

.v-application {
    max-height: 92vh !important;
    background-color: none !important;

}

img {
    max-width: 92%;
}
</style>