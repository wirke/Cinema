<template>
<div id="app">
  <AdminFilm></AdminFilm>
  <AdminPrikaz></AdminPrikaz>
  <AdminProstorija></AdminProstorija>
</div>
</template>

<script>
import AdminFilm from '../components/AdminFilm.vue'
import AdminProstorija from '../components/AdminProstorija.vue'
import AdminPrikaz from '../components/AdminPrikaz.vue'

export default {
    name: 'AdminAdmin',
    components: {
        AdminFilm,
        AdminPrikaz,
        AdminProstorija
    }
  }
</script>

<style>

</style>