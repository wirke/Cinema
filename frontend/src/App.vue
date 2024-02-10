<template>
  <header id="navbar">
      <h1>BIOSKOP</h1>
    <nav>
      <router-link to="/">Početna</router-link> |
      <router-link to="/repertoar">Repertoar</router-link> |
      <router-link to="/admin">Admin</router-link>
    </nav>
    <div id="profil">
      <RezervacijeC>
      </RezervacijeC>
    </div>
  </header>
 <router-view/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  name: 'App',
  components:{
    RouterLink,
    RouterView
  }
}
</script>


<style>
@font-face {
    font-family: "MojFont";
    src: url('~@/assets/font/Gilroy-Bold.ttf') format('truetype');
}
@font-face {
    font-family: "MojFont";
    src: url('~@/assets/font/Gilroy-Black.ttf') format('truetype');
}
#app {
  font-family: "MojFont", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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
