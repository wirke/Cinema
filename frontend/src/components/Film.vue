<template>
  <div>
    <h2>Detalji filma</h2>
    <div v-if="film">
      <h3>{{ film.naziv }}</h3>
      <p><strong>Zanr:</strong> {{ film.zanr }}</p>
      <p><strong>Opis:</strong> {{ film.opis }}</p>
    </div>
    <div v-else>
      <p>Informacije o filmu nisu dostupne</p>
    </div>

    <div v-if="prikazi.length > 0">
      <h3>Prikazi za ovaj film</h3>
      <ul>
        <li v-for="prikaz in prikazi" :key="prikaz.id">
          <p>Vreme prikaza: {{ prikaz.vremePrikaza }}</p>
          <p>Prostorija: {{ prikaz.nazivProstorije }}</p>
          <p>Cena karte: {{ prikaz.cenaKarte }}</p>
        </li>
      </ul>
    </div>
    <div v-else>
      <br>
      <p>Nema prikaza za ovaj film</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      film: null,
      prikazi: []
    };
  },
  created() {
    this.ucitajFilm();
  },
  methods: {
    async ucitajFilm() {
      try {
        const filmId = this.$route.params.id;
        const responseFilm = await axios.get(`http://localhost:5000/FilmController/${filmId}`);
        this.film = responseFilm.data;
        
        const responsePrikazi = await axios.get(`http://localhost:5000/PrikazController/film/${filmId}`);
        this.prikazi = responsePrikazi.data;
      } catch (error) {
        console.error('Greška pri hvatanju prikaza:', error);
      }
    }
  }
};
</script>

<style></style>
