import Vue from 'vue';
import VueRouter from 'vue-router';
import Pocetna from '../views/Pocetna.vue';
import Filmovi from '../views/Filmovi.vue';
import Repertoar from '../views/Repertoar.vue';
import FilmDetalji from '../views/FilmDetalji.vue';
import Rezervacije from '../views/Rezervacije.vue';
import Admin from '../views/Admin.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Pocetna',
    component: Pocetna
  },
  {
    path: '/filmovi',
    name: 'Filmovi',
    component: Filmovi
  },
  {
    path: '/repertoar',
    name: 'Repertoar',
    component: Repertoar
  },
  {
    path: '/film/:id',
    name: 'FilmDetalji',
    component: FilmDetalji,
    props: true
  },
  {
    path: '/rezervacije',
    name: 'Rezervacije',
    component: Rezervacije
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
