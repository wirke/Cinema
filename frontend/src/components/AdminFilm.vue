<template>
    <div>
      <div>
        <h3>Unos novog filma</h3>
        <div class="form-group">
          <input placeholder="Naziv" type="text" id="naziv" v-model="noviFilm.naziv">
        </div>
        <div class="form-group">
          <input placeholder="Zanr" type="text" id="zanr" v-model="noviFilm.zanr">
        </div>
        <div class="form-group">
          <textarea placeholder="Opis" id="opis" v-model="noviFilm.opis"></textarea>
        </div>
        <button @click="dodajFilm">Dodaj film</button>
      </div>
      <br>
      <div>
        <h3>Lista filmova</h3>
        <ul>
          <li v-for="film in filmovi" :key="film.id">
            <h4>{{ film.naziv }} - {{ film.zanr }}</h4>
            <p>{{ film.opis }}</p>
            <button @click="obrisiFilm(film.id)">Obriši film</button>
          </li>
        </ul>
        <br>
      </div>
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
      },
      async dodajFilm() {
        try {
          await axios.post('http://localhost:5000/FilmController', this.noviFilm);
          this.ucitajFilmove();
          this.noviFilm = { naziv: '', zanr: '', opis: '' };
        } catch (error) {
          console.error('Greška pri dodavanju filma:', error);
        }
      },
      async obrisiFilm(id) {
        try {
          await axios.delete(`http://localhost:5000/FilmController/${id}`);
          this.ucitajFilmove();
        } catch (error) {
          console.error('Greška pri brisanju filma:', error);
        }
      }
    }
  }
  </script>
  