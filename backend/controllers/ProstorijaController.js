import { sveProstorije, getProstorija, kreirajProstoriju, obrisiProstoriju } from '../models/ProstorijaModel.js'

export const getProstorije = (req, res) => {
    sveProstorije((err, results) => {
      if (err) {
          res.status(500).json({ error: err.message });
      } else {
          res.status(200).json(results);
      }
  });
}

export const prikaziProstoriju = (req, res) => {
    const id = req.params.id;
    getProstorija(id, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            if (!results) {
                res.status(404).json({ message: "Prostorija nije nadjena" });
            } else {
                res.status(200).json(results);
            }
        }
    });
}

export const unesiProstoriju = (req, res) => {
  const data = req.body;
  if (!data.ime || !data.visinaProstorije || !data.duzinaProstorije || !data.cenaSedista) {
      res.status(400).json({ error: "Nepotpuna forma" });
  } else {
      kreirajProstoriju(data, (err, results) => {
          if (err) {
              res.status(500).json({ error: err.message });
          } else {
              res.status(201).json({ message: "Prosotrija uspesno dodat", film: results });
          }
      });
  }
}

export const ukloniProstoriju = (req, res) => {
  const id = req.params.id;
  obrisiProstoriju(id, (err, results) => {
      if (err) {
          res.status(500).json({ error: err.message });
      } else {
          res.status(200).json({ message: "Prostorija uspesno izbrisan" });
      }
  });
}