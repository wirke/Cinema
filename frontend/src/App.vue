<template>
    <div>
      <button @click="dohvatiFilmove">Dohvati Filmove</button>
      <button @click="kreirajFilm">Kreiraj Film</button>
      <button @click="obrisiFilm">Obriši Film</button>
  
      <!-- Dodajte slične elemente za prostorije i rezervacije -->
  
      <div v-for="film in filmovi" :key="film.id">
        <h2>{{ film.naziv }}</h2>
        <p>{{ film.opis }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        filmovi: []
      };
    },
    methods: {
      async dohvatiFilmove() {
        try {
          const response = await axios.get('/api/filmovi');
          this.filmovi = response.data;
        } catch (error) {
          console.error('Greška pri dohvatanju filmova:', error);
        }
      },
      async kreirajFilm() {
        try {
          const response = await axios.post('/api/filmovi', { naziv: 'Naziv filma', opis: 'Opis filma', godina: 2024, zanr: 'Zanr filma' });
          console.log('Novi film:', response.data);
          // Ažurirajte prikaz filmova ili uradite nešto drugo po potrebi
        } catch (error) {
          console.error('Greška pri kreiranju filma:', error);
        }
      },
      async obrisiFilm(id) {
        try {
          const response = await axios.delete(`/api/filmovi/${id}`);
          console.log('Film obrisan:', response.data);
          // Ažurirajte prikaz filmova ili uradite nešto drugo po potrebi
        } catch (error) {
          console.error('Greška pri brisanju filma:', error);
        }
      }
  
      // Dodajte slične metode za prostorije i rezervacije
    },
    mounted() {
      this.dohvatiFilmove(); // Poziv funkcije za dohvat filmova pri učitavanju komponente
    }
  };
  </script>
  