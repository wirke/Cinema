<template>
  <div>
    <h1>Admin Panel</h1>
    <router-link to="/admin/film">Upravljanje filmovima</router-link> |
    <router-link to="/admin/prostorija">Upravljanje prostorijama</router-link> |
    <router-link to="/admin/prikaz">Upravljanje prikazima</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'AdminView',
}
</script>
