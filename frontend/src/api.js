const API_BASE_URL = 'http://localhost:3000/api';

// FILM
async function sviFilmovi() {
  const response = await fetch(`${API_BASE_URL}/filmovi`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

async function getFilm(id) {
  const response = await fetch(`${API_BASE_URL}/filmovi/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

async function kreirajFilm(naslov, opis, zanr) {
  const filmData = {
    naslov: naslov,
    opis: opis,
    zanr: zanr
  };

  const response = await fetch(`${API_BASE_URL}/filmovi`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(filmData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

async function obrisiFilm(id) {
  const response = await fetch(`${API_BASE_URL}/filmovi/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

// PROSTORIJA
async function sveProstorije() {
  const response = await fetch(`${API_BASE_URL}/prostorije`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

async function kreirajProstoriju(naziv, visinaProstorije, duzinaProstorije, cenaSedista) {
  const prostorijaData = {
    naziv: naziv,
    visinaProstorije: visinaProstorije,
    duzinaProstorije: duzinaProstorije,
    cenaSedista: cenaSedista
  };

  const response = await fetch(`${API_BASE_URL}/prostorije`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(prostorijaData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

async function obrisiProstoriju(id) {
  const response = await fetch(`${API_BASE_URL}/prostorije/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

// PRIKAZ
async function sviPrikazi() {
  const response = await fetch(`${API_BASE_URL}/prikazi`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

async function kreirajPrikaz(vremePrikaza, id_Film, id_Prostorija) {
  const prikazData = {
    vremePrikaza: vremePrikaza,
    id_Film: id_Film,
    id_Prostorija: id_Prostorija
  };

  const response = await fetch(`${API_BASE_URL}/prikazi`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(prikazData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

async function obrisiPrikaz(id) {
  const response = await fetch(`${API_BASE_URL}/prikazi/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

// REZERVACIJA
async function sveRezervacije() {
  const response = await fetch(`${API_BASE_URL}/rezervacije`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

async function kreirajRezervaciju(sediste, datum, imeKupca, id_Prikaz) {
  const rezervacijaData = {
    sediste: sediste,
    datum: datum,
    imeKupca: imeKupca,
    id_Prikaz: id_Prikaz
  };

  const response = await fetch(`${API_BASE_URL}/rezervacije`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(rezervacijaData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

export {
  //FILM
  sviFilmovi,
  getFilm,
  kreirajFilm,
  obrisiFilm,
  //PROSTORIJA
  sveProstorije,
  kreirajProstoriju,
  obrisiProstoriju,
  //PRIKAZ
  sviPrikazi,
  kreirajPrikaz,
  obrisiPrikaz,
  //REZERVACIJA
  sveRezervacije,
  kreirajRezervaciju
};