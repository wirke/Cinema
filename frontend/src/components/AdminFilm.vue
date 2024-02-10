<script>
import { sviFilmovi, kreirajFilm, obrisiFilm } from '../api';

export default {
  data() {
    return {
      filmovi: [],
      noviFilmNaslov: '',
      noviFilmOpis: '',
      noviFilmZanr: ''
    };
  },
  async mounted() {
    try {
      this.filmovi = await sviFilmovi();
    } catch (error) {
      console.error('Došlo je do greške pri dohvatanju filmova:', error);
    }
  },
  methods: {
    async kreirajNoviFilm() {
      try {
        await kreirajFilm(this.noviFilmNaslov, this.noviFilmOpis, this.noviFilmZanr);
        this.filmovi = await sviFilmovi();
        this.noviFilmNaslov = '';
        this.noviFilmOpis = '';
        this.noviFilmZanr = '';
      } catch (error) {
        console.error('Došlo je do greške pri kreiranju filma:', error);
      }
    },
    async obrisiFilm(id) {
      try {
        await obrisiFilm(id);
        this.filmovi = await sviFilmovi();
      } catch (error) {
        console.error('Došlo je do greške pri brisanju filma:', error);
      }
    }
  }
}
</script>

<template>
  <footer>
    <h2>Lista filmova</h2>
    <ul>
      <li v-for="film in filmovi" :key="film.id">
        {{ film.naslov }} - {{ film.zanr }}
        <button @click="obrisiFilm(film.id)">Obriši</button>
      </li>
    </ul>
    <h2>Kreiraj novi film</h2>
    <input type="text" v-model="noviFilmNaslov" placeholder="Naslov">
    <input type="text" v-model="noviFilmOpis" placeholder="Opis">
    <input type="text" v-model="noviFilmZanr" placeholder="Žanr">
    <button @click="kreirajNoviFilm">Kreiraj</button>
  </footer>
</template>

<style>

</style>