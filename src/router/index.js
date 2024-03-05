import { createRouter, createWebHistory } from 'vue-router'
import HomeSection from '../components/HomeSection.vue'
import AboutSection from '../components/AboutSection.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeSection
  },
  {
    path: '/about',
    name: 'about',
    component: AboutSection
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
