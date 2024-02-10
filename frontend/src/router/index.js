import { createRouter, createWebHistory } from 'vue-router'
import Pocetna from '../views/Pocetna.vue'
const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'Pocetna',
      component: Pocetna
    },
    {
      path: '/repertoar',
      name: 'Repertoar',
      component: () => import('../views/Repertoar.vue')
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../views/AdminPage.vue')
    }
  ]
})

export default router
