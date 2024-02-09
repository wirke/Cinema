<template>
  <NavBar msg="BIOSKOP"/>
  <Rezervacije></Rezervacije>
</template>

<script>
import NavBar from './components/Navbar.vue'
import Rezervacije from './components/Rezervacije.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Rezervacije
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
</style>
