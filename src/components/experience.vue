<template>
    <v-container id="experience">
        <v-row justify="center">
            <v-col cols="12" md="8">
                <h2 class="text-h2 text-center my-2 pb-4 w-100 text-white">
                    Experience
                </h2>

                <v-timeline align="start" side="end" class="bold-timeline" color="white">
                    <v-timeline-item v-for="(item, index) in experiences" :key="index" :dot-color="item.color"
                        size="small">
                        <template #opposite>
                            <span class="font-weight-bold text-grey">
                                {{ item.period }}
                            </span>
                        </template>

                        <v-card elevation="4" rounded="lg" color="primary">
                            <v-card-title class="text-h6">
                                {{ item.title }}
                            </v-card-title>

                            <v-card-subtitle class="mb-2">
                                {{ item.company }}
                            </v-card-subtitle>

                            <v-card-text>
                                <ul>
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
            "•	Web Development team",
            "•	Develop web Applications and plugins using Vue js",
            "•	Implement UI reusable Vue.js components for web and mobiles apps",
            "•	Help my teammates to improve their code quality and development skills"
        ]
    },
    {
        period: "Apr 2024-Aug-2024",
        title: "Frontend developer Vue js & Nuxt js",
        company: " Cairo House Development (CHD), Cairo, Egypt",
        color: "success",
        points: [
            "•	Build websites, mobile apps and web applications with web development best practices",
            "•	Work with back-end developers to integrate UI components with API and databases",
            "•	Gather and refine specifications and requirement based on technical requirements or UX design",
            "•	Debug errors, troubleshoot issues, and perform routine performance optimizations", "•	On-site search engine optimization (SEO)",
            "•	Write high-quality, scalable, and reusable code",
            "•	Stay plugged into emerging technologies and industry"
        ]
    }
    ,
    {
        period: "Aug 2022-sep 2022",
        title: "Internship for frontend developers using vue.js.",
        company: "information technology institute,ITI  , Mansoura branch",
        color: "primary",
        points: [
            "•	Build websites, mobile apps and web applications with web development best practices",
            "•	Work with back-end developers to integrate UI components with API and databases",
            "•	Gather and refine specifications and requirement based on technical requirements or UX design",]
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

/* thickness */
</style>
