<script>
import myInfoCom from './components/myInfo.vue';
import about from './components/about.vue';
import skills from './components/skills.vue';

export default {
  data() {
    return {
      drawer: false,
      vantaEffect: null
    };
  },
  components: {

    myInfoCom,
    about, skills
  }
  ,

  mounted() {

    this.vantaEffect = window.VANTA.TOPOLOGY({
      el: document.getElementById("vanta"),
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x1da4ff,
      backgroundColor: 0x000000
    });

  },
  beforeUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
};
</script>


<template>
  <v-app style="background: none;" lazy>

    <v-app-bar app color="indigo" dark>
      <!-- Logo -->
      <v-toolbar-title class="d-flex align-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="50" viewBox="0 0 400 140">
          <defs>
            <linearGradient id="gradFinalAnim" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#1da4ff">
                <animate attributeName="stop-color" values="#1da4ff;#ff4081;#1da4ff" dur="4s"
                  repeatCount="indefinite" />
              </stop>
              <stop offset="50%" style="stop-color:#00ffe7">
                <animate attributeName="stop-color" values="#00ffe7;#ff00ff;#00ffe7" dur="4s"
                  repeatCount="indefinite" />
              </stop>
              <stop offset="100%" style="stop-color:#ff4081">
                <animate attributeName="stop-color" values="#ff4081;#1da4ff;#ff4081" dur="4s"
                  repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>

          <!-- KH Monogram -->
          <g>
            <polygon points="10,120 10,20 45,70" fill="url(#gradFinalAnim)">
              <animateTransform attributeName="transform" type="rotate" from="0 30 70" to="360 30 70" dur="10s"
                repeatCount="indefinite" />
            </polygon>
            <polygon points="45,20 80,120 80,20" fill="url(#gradFinalAnim)" opacity="0.9">
              <animateTransform attributeName="transform" type="rotate" from="360 62 70" to="0 62 70" dur="12s"
                repeatCount="indefinite" />
            </polygon>
            <polygon points="80,70 115,20 115,120" fill="url(#gradFinalAnim)" opacity="0.7">
              <animateTransform attributeName="transform" type="rotate" from="0 97 70" to="360 97 70" dur="14s"
                repeatCount="indefinite" />
            </polygon>
          </g>

          <!-- Full Name -->
          <text x="160" y="85" font-family="'Rubik 80s Fade', system-ui" font-weight="700" font-size="60" fill="#fff">
            Khaled
          </text>
        </svg>
      </v-toolbar-title>

      <!-- Desktop Menu -->
      <v-row class="d-none d-md-flex mx-1" align="center" justify="end">
        <v-btn text href="#">Home</v-btn>
        <v-btn text href="#About">About</v-btn>
        <v-btn text href="#Skills">Skills</v-btn>
        <v-btn text href="#Projects">Projects</v-btn>
        <v-btn text href="#Contact">Contact</v-btn>
      </v-row>

      <!-- Mobile Hamburger -->
      <v-menu class="d-md-none w-100" v-model="drawer" location="end" transition="slide-y-transition"
        :close-on-content-click="false" style="width: 100%;">
        <template #activator="{ props }" class="d-none">
          <v-btn icon v-bind="props" class="d-md-none">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item href="#">Home</v-list-item>
          <v-list-item href="#About">About</v-list-item>
          <v-list-item href="#Skills">Skills</v-list-item>
          <v-list-item href="#Projects">Projects</v-list-item>
          <v-list-item href="#Contact">Contact</v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-container class="bg-none">
      <div ref="vanta" class="vanta-bg" id="vanta"> </div>

    </v-container>

    <myInfoCom class="bg-none" lazy />
    <about class="bg-none h-screen" style="min-height: fit-content;" />
    <skills class="bg-none h-screen" />
  </v-app>
</template>
<style scoped>
.v-toolbar-title svg {
  max-width: 120px;
  height: auto;
}


.v-applictaion {
  background-color: none !important;
}

.vanta-bg {
  width: 100% !important;
  height: 100vh;
  position: fixed !important;
  top: 0;
  z-index: -1;
  left: 0;

}

.vanta-canvas {
  position: fixed !important;
  width: 100% !important;
  height: 100% !important;
}

.v-overlay__content {
  width: 100% !important;
  top: 25px !important;
}
</style>