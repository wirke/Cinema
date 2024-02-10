<template>
  <div id="navbar">
      <h1>BIOSKOP</h1>
    <div>
      <a href="#/">Početna</a> |
      <a href="#/Repertoar">Repertoar</a> |
      <a href="#/Admin">Admin</a>
      <component :is="currentView" />
    </div>
    <div id="profil">
      <RezervacijeC>
      </RezervacijeC>
  </div>
  </div>
</template>

<script>
import RezervacijeC from '../components/Rezervacije.vue'
export default {
  name: 'NavBar',
  props: {
    msg: String,
  },
  components:{
    RezervacijeC,
  },
}
</script>

<script setup>
import { ref, computed } from 'vue'
import AdminAdmin from '@/views/Admin.vue';
import Pocetna from '@/views/Pocetna.vue';
import Repertoar from '@/views/Repertoar.vue';

const routes = {
  '/': Pocetna,
  '/admin': AdminAdmin,
  '/repertoar': Repertoar,
}
const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/']
})
</script>

<style scoped>
#navbar{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: #F1654A;
}
#profil{
  width: 50px;
  height: 50px;
  background-color: #363030;
  border-radius: 15px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration: none;
  color: #363030;
}
</style>
