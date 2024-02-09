const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const filmoviRouter = require('./routes/filmovi');
const prostorijeRouter = require('./routes/prostorije');
const prikaziRouter = require('./routes/prikazi');
const rezervacijeRouter = require('./routes/rezervacije');

app.use(express.json());

app.use('/api', filmoviRouter);
app.use('/api', prostorijeRouter);
app.use('/api', prikaziRouter);
app.use('/api', rezervacijeRouter);

app.listen(PORT, () => {
  console.log(`Server je pokrenut na portu ${PORT}`);
});