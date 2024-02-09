import Vue from 'vue';
import VueRouter from 'vue-router';
import AdminAdmin from '@/views/Admin.vue';
import Pocetna from '@/views/Pocetna.vue';
import Repertoar from '@/views/Repertoar.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Pocetna },
  { path: '/admin', component: AdminAdmin },
  { path: '/repertoar', component: Repertoar }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
