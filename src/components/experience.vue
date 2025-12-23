<template>
    <v-container id="experience">
        <v-row justify="center">
            <v-col cols="12" md="8">
                <h2 class="text-h2 text-center my-2 py-4 w-100 text-white">
                    Experience
                </h2>

                <v-timeline align="start" side="end" class="bold-timeline mobile-timeline" color="white">
                    <v-timeline-item v-for="(item, index) in experiences" :key="index" :dot-color="item.color"
                        size="small">
                        <template #opposite>
                            <span class="font-weight-bold text-grey">
                                {{ item.period }}
                            </span>
                        </template>

                        <v-card elevation="4" rounded="lg" class="px-2 px-sm-4 px-md-0" color="primary">
                            <v-card-title class="text-h6">
                                {{ item.title }}
                            </v-card-title>

                            <v-card-subtitle class="mb-2">
                                {{ item.company }}
                            </v-card-subtitle>

                            <v-card-text>
                                <ul class="experience-list">
                                    <li v-for="(point, i) in item.points" :key="i">
                                        {{ point }}
                                    </li>
                                </ul>
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
const experiences = [
    {
        period: " Dec 2024- Dec 2025",
        title: "Frontend developer Vue js ",
        company: " Egyptian Army,  Cairo, Egypt",
        color: "primary",
        points: [
            "Web Development team",
            "Develop web Applications and plugins using Vue js",
            "Implement UI reusable Vue.js components for web and mobiles apps",
            "Help my teammates to improve their code quality and development skills"
        ]
    },
    {
        period: "Apr 2024-Aug-2024",
        title: "Frontend developer Vue js & Nuxt js",
        company: " Cairo House Development (CHD), Cairo, Egypt",
        color: "success",
        points: [
            "Build websites, mobile apps and web applications with web development best practices",
            "Work with back-end developers to integrate UI components with API and databases",
            "Gather and refine specifications and requirement based on technical requirements or UX design",
            "Debug errors, troubleshoot issues, and perform routine performance optimizations", "•	On-site search engine optimization (SEO)",
            "Write high-quality, scalable, and reusable code",
            "Stay plugged into emerging technologies and industry"
        ]
    }
    ,
    {
        period: "Aug 2022-sep 2022",
        title: "Internship for frontend developers using vue.js.",
        company: "information technology institute,ITI  , Mansoura branch",
        color: "primary",
        points: [
            "Build websites, mobile apps and web applications with web development best practices",
            "Work with back-end developers to integrate UI components with API and databases",
            "Gather and refine specifications and requirement based on technical requirements or UX design",]
    }
];
</script>

<style scoped>
ul {
    padding-left: 18px;
}

li {
    margin-bottom: 6px;
}

.bold-timeline :deep(.v-timeline-divider__line),
.bold-timeline :deep(.v-timeline-divider__before),
.bold-timeline :deep(.v-timeline-divider__after) {
    background-color: #ffffff !important;
}

/* Prevent horizontal overflow */
.mobile-timeline {
    padding-inline: 0 !important;
}

.experience-card {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
}

/* Timeline item fix */
:deep(.v-timeline-item__body) {
    max-width: 100%;
    padding-inline: 0 !important;
}

/* Remove extra offset on mobile */
@media (max-width: 600px) {
    :deep(.v-timeline-item__opposite) {
        display: none;
    }

    :deep(.v-timeline-item__body) {
        margin-inline: 0 !important;
    }
}

@media (max-width: 600px) {
    .experience-card {
        max-width: 360px;
        min-height: 100%;
    }
}

/* thickness */
</style>
