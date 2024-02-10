import { createRouter, createWebHistory } from 'vue-router'
import Pocetna from '../views/Pocetna.vue'
import Repertoar from '../views/Repertoar.vue'
import Admin from '../views/Admin.vue'

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
      component: Repertoar
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})

export default router
