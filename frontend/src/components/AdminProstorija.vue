<template>
  <div>
    <div>
      <h3>Unos nove prostorije</h3>
      <div class="form-group">
        <input placeholder="Naziv" type="text" id="ime" v-model="novaProstorija.ime">
      </div>
      <div class="form-group">
        <input placeholder="Visina" type="number" id="visinaProstorije" v-model="novaProstorija.visinaProstorije">
      </div>
      <div class="form-group">
        <input placeholder="Duzina" type="number" id="duzinaProstorije" v-model="novaProstorija.duzinaProstorije">
      </div>
      <div class="form-group">
        <input placeholder="Cena sedista" type="number" id="cenaSedista" v-model="novaProstorija.cenaSedista">
      </div>
      <button @click="dodajProstoriju">Dodaj prostoriju</button>
    </div>
    <br>
    <div>
      <h3>Lista prostorija</h3>
      <ul>
        <li v-for="prostorija in prostorije" :key="prostorija.id">
          <h4>{{ prostorija.ime }}</h4>
          <p>{{ prostorija.visinaProstorije }} x {{ prostorija.duzinaProstorije }}</p>
          <p>{{ prostorija.cenaSedista }}</p>
          <button @click="obrisiProstoriju(prostorija.id)">Obriši prostoriju</button>
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
      prostorije: [],
      novaProstorija: {
        ime: '',
        visinaProstorije: null,
        duzinaProstorije: null,
        cenaSedista: null
      }
    }
  },
  created() {
    this.ucitajProstorije();
  },
  methods: {
    async ucitajProstorije() {
      try {
        const response = await axios.get('http://localhost:5000/ProstorijaController');
        this.prostorije = response.data;
      } catch (error) {
        console.error('Greška pri učitavanju prostorija:', error);
      }
    },
    async dodajProstoriju() {
      try {
        await axios.post('http://localhost:5000/ProstorijaController', this.novaProstorija);
        this.ucitajProstorije();
        this.novaProstorija = { ime: '', visinaProstorije: '', duzinaProstorije: '', cenaSedista: '' };
      } catch (error) {
        console.error('Greška pri dodavanju prostorije:', error);
      }
    },
    async obrisiProstoriju(id) {
      try {
        await axios.delete(`http://localhost:5000/ProstorijaController/${id}`);
        this.ucitajProstorije();
      } catch (error) {
        console.error('Greška pri brisanju prostorije:', error);
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