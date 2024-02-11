<template>
  <div>
    <h2>Trenutno na repertoaru</h2>
    <ul v-for="film in filmovi" :key="film.id">
      <li> <a v-bind:href="'/film/'+ film.id"> {{ film.naziv }} - {{ film.zanr }} </a></li>
      <li>{{ film.opis }}</li>
      <hr>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      filmovi: [],
      noviFilm: {
        naziv: '',
        zanr: '',
        opis: ''
      }
    }
  },
  created() {
    this.ucitajFilmove();
  },
  methods: {
    async ucitajFilmove() {
      try {
        const response = await axios.get('http://localhost:5000/FilmController');
        this.filmovi = response.data;
      } catch (error) {
        console.error('Greška pri učitavanju filmova:', error);
      }
    }
  }
}
</script>

<style></style>