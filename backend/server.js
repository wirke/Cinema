const express = require('express');
const bodyParser = require('body-parser');
const korisniciRouter = require('./routes/korisnici');
const rezervacijeRouter = require('./routes/rezervacije');
const prikaziRouter = require('./routes/prikazi');
const filmoviRouter = require('./routes/filmovi');
const prostorijeRouter = require('./routes/prostorije');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', korisniciRouter);
app.use('/api', rezervacijeRouter);
app.use('/api', prikaziRouter);
app.use('/api', filmoviRouter);
app.use('/api', prostorijeRouter);

app.listen(port, () => {
  console.log(`Server sluša na http://localhost:${port}`);
});