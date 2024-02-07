<template>
    <div>
      <h2>Upravljanje filmovima</h2>
  
      <form @submit.prevent="dodajFilm">
        <input type="text" v-model="noviFilm.naziv" placeholder="Naziv filma" required>
        <input type="text" v-model="noviFilm.opis" placeholder="Opis" required>
        <input type="text" v-model="noviFilm.zanr" placeholder="Žanr" required>
        <button type="submit">Dodaj film</button>
      </form>
  
      <table>
        <thead>
          <tr>
            <th>Naziv</th>
            <th>Žanr</th>
            <th>Opis</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="film in filmovi" :key="film.id">
            <td>{{ film.naziv }}</td>
            <td>{{ film.opis }}</td>
            <td>{{ film.zanr }}</td>
            <td>
              <button @click="azurirajFilm(film)">Ažuriraj</button>
              <button @click="obrisiFilm(film.id)">Obriši</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { filmoviService } from '../services/apiService';
  
  export default {
    name: 'AdminFilm',
    data() {
      return {
        filmovi: [],
        noviFilm: {
          naziv: '',
          zanr: '',
          opis: ''
        }
      };
    },
    methods: {
      async ucitajFilmove() {
        try {
          const response = await filmoviService.dohvatiFilmove();
          this.filmovi = response.data;
        } catch (error) {
          console.error('Greška pri dohvatanju filmova:', error);
        }
      },
      async dodajFilm() {
        try {
          await filmoviService.kreirajFilm(this.noviFilm);
          this.ucitajFilmove();
          this.noviFilm = {
            naziv: '',
            zanr: '',
            opis: ''
          };
        } catch (error) {
          console.error('Greška pri dodavanju filma:', error);
        }
      },
      async azurirajFilm(film) {
      },
      async obrisiFilm(id) {
        try {
          await filmoviService.obrisiFilm(id);
          this.ucitajFilmove();
        } catch (error) {
          console.error('Greška pri brisanju filma:', error);
        }
      }
    },
    mounted() {
      this.ucitajFilmove();
    }
  };
  </script>
  
  <style scoped>
  </style>
  