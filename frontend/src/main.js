import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Filmovi from './components/Filmovi.vue';
import Prostorije from './components/Prostorije.vue';
import Prikazi from './components/Prikazi.vue';
import Rezervacije from './components/Rezervacije.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/filmovi', component: Filmovi },
  { path: '/prostorije', component: Prostorije },
  { path: '/prikazi', component: Prikazi },
  { path: '/rezervacije', component: Rezervacije }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
