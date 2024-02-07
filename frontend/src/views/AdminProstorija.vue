<template>
    <div>
      <h2>Upravljanje prostorijama</h2>
  
      <form @submit.prevent="dodajProstoriju">
        <input type="text" v-model="novaProstorija.naziv" placeholder="Naziv prostorije" required>
        <input type="number" v-model="novaProstorija.brojSedista" placeholder="Broj sedišta" required>
        <input type="number" v-model="novaProstorija.cenaSedista" placeholder="Cena sedišta" required>
        <button type="submit">Dodaj prostoriju</button>
      </form>
  
      <table>
        <thead>
          <tr>
            <th>Naziv</th>
            <th>Broj sedišta</th>
            <th>Cena sedišta</th>
            <th>Akcije</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="prostorija in prostorije" :key="prostorija.id">
            <td>{{ prostorija.naziv }}</td>
            <td>{{ prostorija.brojSedista }}</td>
            <td>{{ prostorija.cenaSedista }}</td>
            <td>
              <button @click="azurirajProstoriju(prostorija)">Ažuriraj</button>
              <button @click="obrisiProstoriju(prostorija.id)">Obriši</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { prostorijeService } from '../services/apiService';
  
  export default {
    name: 'AdminProstorija',
    data() {
      return {
        prostorije: [],
        novaProstorija: {
          naziv: '',
          brojSedista: null,
          cenaSedista: null
        }
      };
    },
    methods: {
      async ucitajProstorije() {
        try {
          const response = await prostorijeService.dohvatiProstorije();
          this.prostorije = response.data;
        } catch (error) {
          console.error('Greška pri dohvatanju prostorija:', error);
        }
      },
      async dodajProstoriju() {
        try {
          await prostorijeService.kreirajProstoriju(this.novaProstorija);
          this.ucitajProstorije();
          this.novaProstorija = {
            naziv: '',
            brojSedista: null,
            cenaSedista: null
          };
        } catch (error) {
          console.error('Greška pri dodavanju prostorije:', error);
        }
      },
      async azurirajProstoriju(prostorija) {
      },
      async obrisiProstoriju(id) {
        try {
          await prostorijeService.obrisiProstoriju(id);
          this.ucitajProstorije();
        } catch (error) {
          console.error('Greška pri brisanju prostorije:', error);
        }
      }
    },
    mounted() {
      this.ucitajProstorije();
    }
  };
  </script>
  
  <style scoped>
  </style>
  