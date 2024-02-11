import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/repertoar',
      name: 'repertoar',
      component: () => import('../views/RepertoarView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue')
    },
    //{
    //  path: '/film',
    //  name: 'film',
    //  component: () => import('../views/FilmVIew.vue')
    //},
  ]
})

export default router
