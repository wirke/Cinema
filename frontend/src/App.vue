<template>
  <NavBar msg="BIOSKOP"/>
</template>

<script>
import NavBar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    NavBar
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
