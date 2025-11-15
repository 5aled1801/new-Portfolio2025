// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      projects: [
        { id: 1, title: 'E-commerce', image: 'e-commerce.png', Demo: 'https://e-commerce-8821b.web.app', github: 'https://github.com/5aled1801/E-commerce-Using-vue3/tree/main/vue-project' },
        { id: 2, title: 'Movies', image: 'movies.png', Demo: 'https://movies-7e7af.web.app', github: 'https://github.com/5aled1801/MoviesApp' },
        { id: 3, title: 'Weather', image: 'weather.png', Demo: 'https://weather-1d634.web.app/', github: 'https://github.com/5aled1801/Weather' },
        { id: 4, title: 'Restaurantt system', image: 'restaurant.png', Demo: 'https://weather-1d634.web.app/', github: 'https://github.com/5aled1801/Resturant-system' },
        { id: 5, title: 'Get repo by username', image: 'getRepo.png', Demo: 'https://get-repo-31fcb.web.app', github: 'https://github.com/5aled1801/Get-repository-using-username' },
        { id: 6, title: 'Yummy', image: 'yummy.png', Demo: 'https://5aled1801.github.io/Yummy/', github: 'https://github.com/5aled1801/Yummy' },
        { id: 7, title: 'Extra team', image: 'extraTeam.png', Demo: 'https://5aled1801.github.io/Extra-Team/', github: 'https://github.com/5aled1801/Extra-Team' },
        { id: 8, title: 'Gym', image: 'gym.png', Demo: 'https://5aled1801.github.io/Gym/', github: 'https://github.com/5aled1801/gym' },
        { id: 9, title: 'Kasper', image: 'template2.png', Demo: 'https://5aled1801.github.io/Kasper-template/', github: 'https://github.com/5aled1801/Kasper-template' },
      ]
    }
  }

})
