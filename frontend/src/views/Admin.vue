<template>
    <div>
      <h2>Admin panel</h2>
      <router-link to="/admin/film" class="nav-link">Filmovi</router-link>
      <router-link to="/admin/prostorija" class="nav-link">Prostorije</router-link>
      <router-link to="/admin/prikaz" class="nav-link">Prikazi</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Admin'
  };
  </script>
  
  <style scoped>
  </style>
  