<template>
    <v-container class="text-white relative" id="Skills">
        <v-row class="align-center justify-space-between absolute fil col-reverse mt-16">
            <h1 class="text-h2 text-center my-2 py-16 w-100">Skills </h1>

        </v-row>
        <v-row>
            <v-col cols="12" md="6" class="text-center">
                <v-img src="" contain max-width="400" class="mx-auto my-4" loading="lazy" />
            </v-col>
            <v-col cols="12" md="6" class="text-center">
                <v-img src="@/assets/skills/backend.png" contain max-width="400" class="mx-auto my-4" />
            </v-col>
        </v-row>
    </v-container>

</template>
<script>
export default {
    name: "skills",
    data() {
        return {};
    },
};

</script>