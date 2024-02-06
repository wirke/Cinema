import Vue from 'vue';
import Router from 'vue-router';
import Korisnici from '@/views/Korisnici.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/korisnici',
      name: 'Korisnici',
      component: Korisnici
    },
  ]
});