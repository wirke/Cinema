<template>
  <div id="navbar">
    <div>
      <h1>{{ msg }}</h1>
      <p>Kuća dobre zabave</p>
    </div>

    <div>
      <router-link to="/">Početna </router-link>
      <router-link to="/repertoar">Repertoar </router-link>
      <router-link to="/admin">Admin </router-link>
      <router-view></router-view>
    </div>
  </div>
  <div>
    <RezervacijeC>
    </RezervacijeC>
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

<style scoped>
@import "~bulma/css/bulma.css";
#navbar{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
h3 {
  margin: 40px 0 0;
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
  color: #42b983;
}
</style>
