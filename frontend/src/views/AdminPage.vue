<script setup>
import AdminFilm from '../components/AdminFilm.vue'
import AdminProstorija from '../components/AdminProstorija.vue'
import AdminPrikaz from '../components/AdminPrikaz.vue'
</script>

<template>
  <footer>
    <AdminFilm/>
    <AdminPrikaz/>
    <AdminProstorija/>
  </footer>
</template>

<style>
footer{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>