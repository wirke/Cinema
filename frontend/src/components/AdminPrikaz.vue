<template>
  <div>
    <h3>Unos novog prikaza</h3>
    <div class="form-group">
      <label for="vremePrikaza">Datum i vreme: </label>
      <input type="datetime-local" id="vremePrikaza" v-model="noviPrikaz.vremePrikaza">
      <label for="film_id">
        <p>Izaberi film</p>
      </label>
      <select v-model="noviPrikaz.id_film">
        <option v-for="film in filmovi" :value="film.id" :key="film.id">{{ film.naziv }}</option>
      </select>
      <label for="prostorija_id">
        <p>Izaberi prostoriju</p>
      </label>
      <select v-model="noviPrikaz.id_prostorija">
        <option v-for="prostorija in prostorije" :value="prostorija.id" :key="prostorija.id">{{ prostorija.naziv }}</option>
      </select>
      <button @click="dodajPrikaz">Dodaj prikaz</button>
    </div>

    <h3>Lista prikaza</h3>
    <ul>
      <li v-for="prikaz in prikazi" :key="prikaz.id">
        <h4>{{ prikaz.vremePrikaza }}</h4>
        <p>Film: {{ prikaz.nazivFilma }}</p>
        <p>Prostorija: {{ prikaz.nazivProstorije }}</p>
        <button @click="obrisiPrikaz(prikaz.id)">Obriši prikaz</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { onMounted } from 'vue'; // Dodajemo import onMounted

export default {
  data() {
    return {
      noviPrikaz: {
        vremePrikaza: null,
        id_film: null,
        id_prostorija: null
      },
      filmovi: [], // Dodajemo inicijalizaciju filmova
      prostorije: [], // Dodajemo inicijalizaciju prostorija
      prikazi: [] // Dodajemo inicijalizaciju prikaza
    }
  },
  // Uzimamo podatke kada se komponenta montira
  setup() {
    onMounted(async () => {
      try {
        const responseFilmovi = await axios.get('http://localhost:5000/FilmController');
        const responseProstorije = await axios.get('http://localhost:5000/ProstorijaController');
        const responsePrikazi = await axios.get('http://localhost:5000/PrikazController');
        
        if (responseFilmovi && responseFilmovi.data) {
          this.filmovi = responseFilmovi.data;
        } else {
          console.error('Nema podataka o filmovima.');
        }
        
        if (responseProstorije && responseProstorije.data) {
          this.prostorije = responseProstorije.data;
        } else {
          console.error('Nema podataka o prostorijama.');
        }
        
        if (responsePrikazi && responsePrikazi.data) {
          this.prikazi = responsePrikazi.data;
        } else {
          console.error('Nema podataka o prikazima.');
        }
      } catch (error) {
        console.error('Greška pri učitavanju podataka:', error);
      }
    });
  },
  methods: {
    async dodajPrikaz() {
      try {
        await axios.post('http://localhost:5000/PrikazController', this.noviPrikaz);
        this.$emit('prikaz-added');
        this.noviPrikaz = { vremePrikaza: null, id_film: null, id_prostorija: null };
      } catch (error) {
        console.error('Greška pri dodavanju prikaza:', error);
      }
    },
    async obrisiPrikaz(id) {
      try {
        await axios.delete(`http://localhost:5000/PrikazController/${id}`);
        this.$emit('prikaz-deleted');
      } catch (error) {
        console.error('Greška pri brisanju prikaza:', error);
      }
    }
  }
}
</script>

<style>
.form-group {
  margin-bottom: 1rem;
}
</style>
