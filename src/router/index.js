import { createRouter, createWebHistory } from 'vue-router'
import HomeSection from '../components/HomeSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'

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
  },
  {
    path: '/experience',
    name: 'experience',
    component: ExperienceSection
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsSection
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactSection
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    }
    return { top: 0 };
  }
})

export default router
