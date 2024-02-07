<template>
    <div>
      <h2>Upravljanje prikazima</h2>
  
      <form @submit.prevent="dodajPrikaz">
        <select v-model="noviPrikaz.id_film">
          <option v-for="film in filmovi" :key="film.id" :value="film.id">{{ film.naziv }}</option>
        </select>
        <select v-model="noviPrikaz.id_prostorija">
          <option v-for="prostorija in prostorije" :key="prostorija.id" :value="prostorija.id">{{ prostorija.naziv }}</option>
        </select>
        <input type="datetime-local" v-model="noviPrikaz.vremePrikaza" required>
        <button type="submit">Dodaj prikaz</button>
      </form>
  
      <table>
        <thead>
          <tr>
            <th>Film</th>
            <th>Prostorija</th>
            <th>Vreme prikaza</th>
            <th>Akcije</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="prikaz in prikazi" :key="prikaz.id">
            <td>{{ prikaz.film }}</td>
            <td>{{ prikaz.prostorija }}</td>
            <td>{{ prikaz.vremePrikaza }}</td>
            <td>
              <button @click="azurirajPrikaz(prikaz)">Ažuriraj</button>
              <button @click="obrisiPrikaz(prikaz.id)">Obriši</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { filmoviService, prostorijeService, prikaziService } from '../services/apiService';
  
  export default {
    name: 'AdminPrikaz',
    data() {
      return {
        filmovi: [],
        prostorije: [],
        prikazi: [],
        noviPrikaz: {
          id_film: null,
          id_prostorija: null,
          vremePrikaza: ''
        }
      };
    },
    methods: {
      async ucitajPodatke() {
        try {
          const [filmoviResponse, prostorijeResponse, prikaziResponse] = await Promise.all([
            filmoviService.dohvatiFilmove(),
            prostorijeService.dohvatiProstorije(),
            prikaziService.dohvatiPrikaze()
          ]);
          this.filmovi = filmoviResponse.data;
          this.prostorije = prostorijeResponse.data;
          this.prikazi = prikaziResponse.data;
        } catch (error) {
          console.error('Greška pri dohvatanju podataka:', error);
        }
      },
      async dodajPrikaz() {
        try {
          await prikaziService.kreirajPrikaz(this.noviPrikaz);
          this.ucitajPodatke();
          this.noviPrikaz = {
            id_film: null,
            id_prostorija: null,
            vremePrikaza: ''
          };
        } catch (error) {
          console.error('Greška pri dodavanju prikaza:', error);
        }
      },
      async azurirajPrikaz(prikaz) {
      },
      async obrisiPrikaz(id) {
        try {
          await prikaziService.obrisiPrikaz(id);
          this.ucitajPodatke();
        } catch (error) {
          console.error('Greška pri brisanju prikaza:', error);
        }
      }
    },
    mounted() {
      this.ucitajPodatke();
    }
  };
  </script>
  
  <style scoped>
  </style>
  