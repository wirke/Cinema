import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Film from '../components/Film.vue'

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
      path: '/rezervacije',
      name: 'rezervacije',
      component: () => import('../views/RezervacijeView.vue')
    },
    {
      path: '/film/:id',
      name: 'film',
      component: Film
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue'),
      children: [
        {
          path: 'film',
          name: 'admin-film',
          component: () => import('../components/AdminFilm.vue')
        },        
        {
          path: 'prostorija',
          name: 'admin-prostorija',
          component: () => import('../components/AdminProstorija.vue')
        },
        {
          path: 'prikaz',
          name: 'admin-prikaz',
          component: () => import('../components/AdminPrikaz.vue')
        }        
      ]
    }
  ]
})

export default router
