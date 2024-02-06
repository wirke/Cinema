import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export default {

  async getFilmovi() {
      try {
        const response = await axios.get(`${API_URL}/filmovi`);
        return response.data;
      } catch (error) {
        console.error('Greska pri ocitavanju filmova:', error);
        throw error;
      }
    },
  async getKorisnici() {
    try {
      const response = await axios.get(`${API_URL}/korisnici`);
      return response.data;
    } catch (error) {
      console.error('Greska pri ocitavanju korisnika:', error);
      throw error;
    }
  },
  async getPrikazi() {
    try {
      const response = await axios.get(`${API_URL}/preikazi`);
      return response.data;
    } catch (error) {
      console.error('Greska pri ocitavanju prikaza:', error);
      throw error;
    }
  },
  async getProstorije() {
    try {
      const response = await axios.get(`${API_URL}/prostorije`);
      return response.data;
    } catch (error) {
      console.error('Greska pri ocitavanju prostorija:', error);
      throw error;
    }
  },
  async getRezervacije() {
    try {
      const response = await axios.get(`${API_URL}/rezervacije`);
      return response.data;
    } catch (error) {
      console.error('Greska pri ocitavanju rezervacija:', error);
      throw error;
    }
  },
};
