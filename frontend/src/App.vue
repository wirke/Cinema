<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="navbar">
      <RouterLink to="/"><h1>BIOSKOP</h1></RouterLink>

      <nav>
        <RouterLink to="/repertoar">Repertoar</RouterLink> |
        <RouterLink to="/rezervacije">Rezervacije</RouterLink> |
        <RouterLink to="/admin">Admin</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
/*
@font-face {
    font-family: "MojFont";
    src: url('~@/assets/font/Gilroy-Bold.ttf') format('truetype');
}
@font-face {
    font-family: "MojFont";
    src: url('~@/assets/font/Gilroy-Black.ttf') format('truetype');
}
#app{
  font-family: "MojFont", sans-serif;
}
*/
</style>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
