const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const filmoviRouter = require('../backend/routes/filmovi'); //getFilmovi, getFilm, kreirajFilm, obrisiFilm
const prostorijeRouter = require('../backend/routes/prostorije'); //sveProstorije, kreirajProstoriju, obrisiProstoriju
const prikaziRouter = require('../backend/routes/prikazi'); //sviPrikazi, kreirajPrikaz, obrisiPrikaz
const rezervacijeRouter = require('../backend/routes/rezervacije'); //sveRezervacije, kreirajRezervaciju

app.use(express.json());

app.use('/api', filmoviRouter);
app.use('/api', prostorijeRouter);
app.use('/api', prikaziRouter);
app.use('/api', rezervacijeRouter);

app.listen(PORT, () => {
  console.log(`Server je pokrenut na portu ${PORT}`);
});