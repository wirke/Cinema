<template>
  <div>
    <h3>Unos novog prikaza</h3>
    <div class="form-group">
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
      <input type="number" v-model="noviPrikaz.cenaKarte" placeholder="Cena karte">
      <button @click="dodajPrikaz">Dodaj prikaz</button>
    </div>

    <h3>Lista prikaza</h3>
    <ul>
      <li v-for="prikaz in prikazi" :key="prikaz.id">
        <h4>{{ prikaz.vremePrikaza }}</h4>
        <p>Film: {{ prikaz.nazivFilma }}</p>
        <p>Prostorija: {{ prikaz.nazivProstorije }}</p>
        <p>Cena karte: {{ prikaz.cenaKarte }}</p>
        <button @click="obrisiPrikaz(prikaz.id)">Obriši prikaz</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const filmovi = ref([]);
    const prostorije = ref([]);
    const prikazi = ref([]);
    
    onMounted(async () => {
      try {
        const responseFilmovi = await axios.get('http://localhost:5000/FilmController');
        const responseProstorije = await axios.get('http://localhost:5000/ProstorijaController');
        const responsePrikazi = await axios.get('http://localhost:5000/PrikazController');
        
        if (responseFilmovi && responseFilmovi.data) {
          filmovi.value = responseFilmovi.data;
        } else {
          console.error('Nema podataka o filmovima.');
        }
        
        if (responseProstorije && responseProstorije.data) {
          prostorije.value = responseProstorije.data;
        } else {
          console.error('Nema podataka o prostorijama.');
        }
        
        if (responsePrikazi && responsePrikazi.data) {
          prikazi.value = responsePrikazi.data;
        } else {
          console.error('Nema podataka o prikazima.');
        }
      } catch (error) {
        console.error('Greška pri učitavanju podataka:', error);
      }
    });
    
    const noviPrikaz = ref({
      vremePrikaza: null,
      id_film: null,
      id_prostorija: null,
      cenaKarte: null
    });

    const dodajPrikaz = async () => {
      try {
        await axios.post('http://localhost:5000/PrikazController', noviPrikaz.value);
        noviPrikaz.value = { vremePrikaza: null, id_film: null, id_prostorija: null, cenaKarte: null };
      } catch (error) {
        console.error('Greška pri dodavanju prikaza:', error);
      }
    };

    const obrisiPrikaz = async (id) => {
      try {
        await axios.delete(`http://localhost:5000/PrikazController/${id}`);
      } catch (error) {
        console.error('Greška pri brisanju prikaza:', error);
      }
    };
    
    return { filmovi, prostorije, prikazi, noviPrikaz, dodajPrikaz, obrisiPrikaz };
  }
}
</script>

<style>
.form-group {
  margin-bottom: 1rem;
}
</style>
