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

<template>
  <header id="navbar">
      <h1>BIOSKOP</h1>
    <nav>
      <router-link to="/"><p>Početna</p></router-link>
      <router-link to="/repertoar"><p>Repertoar</p></router-link>
      <router-link to="/admin"><p>Admin</p></router-link>
    </nav>
    <a id="profil">
      <RezervacijeC>
      </RezervacijeC>
    </a>
  </header>
 <router-view/>
</template>

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
  height: fit-content;
}
#profil{
  padding: 50px;
  background-color: #363030;
  border-radius: 35px;
  margin-right: 7px;
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
h1{
  margin-left: 7px;
  margin: 0;
  font-size: 100px;
}
p{
  padding: 15px;
  margin-left: 10px;
  border-radius: 20px;
  background-color: #F8E2B9;
  font-size: 25px;
}
nav{
  display: flex;
  flex-direction: row;
}
</style>
