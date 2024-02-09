<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Navbar msg="Tekst za navbar"/>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
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
  margin-top: 60px;
}
</style>
