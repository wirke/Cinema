// apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const apiService = axios.create({
  baseURL: API_URL
});

export const filmoviService = {
  async dohvatiFilmove() {
    return apiService.get('/filmovi');
  },

  async kreirajFilm(noviFilm) {
    return apiService.post('/filmovi', noviFilm);
  },

  async obrisiFilm(id) {
    return apiService.delete(`/filmovi/${id}`);
  }
};

export const prostorijeService = {
  async dohvatiProstorije() {
    return apiService.get('/prostorije');
  },

  async kreirajProstoriju(novaProstorija) {
    return apiService.post('/prostorije', novaProstorija);
  },

  async obrisiProstoriju(id) {
    return apiService.delete(`/prostorije/${id}`);
  }
};

export const prikaziService = {
  async dohvatiPrikaze() {
    return apiService.get('/prikazi');
  },

  async kreirajPrikaz(noviPrikaz) {
    return apiService.post('/prikazi', noviPrikaz);
  },

  async obrisiPrikaz(id) {
    return apiService.delete(`/prikazi/${id}`);
  }
};

export const rezervacijeService = {
  async dohvatiRezervacije() {
    return apiService.get('/rezervacije');
  },

  async kreirajRezervaciju(novaRezervacija) {
    return apiService.post('/rezervacije', novaRezervacija);
  }
};

export default apiService;
