import { getRezervacija, getRezervacije, novaRezervacija, obrisiRezervaciju } from "../models/RezervacijaModel.js"

export const prikaziRezervacije = (req, res) => {
    getRezervacije((err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(results);
        }
    });
}

export const prikaziRezervaciju = (req, res) => {
    const id = req.params.id;
    getRezervacija(id, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            if (!results) {
                res.status(404).json({ message: "Rezervacija nije nadjena" });
            } else {
                res.status(200).json(results);
            }
        }
    });
}

export const unesiRezervaciju = (req, res) => {
    const data = req.body;
    if (!data.sediste || !data.datum || !data.imeKupca || !data.prikaz_id) {
        res.status(400).json({ error: "Nepotpuna forma" });
    } else {
        novaRezervacija(data, (err, results) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json({ message: "Rezervacija uspesno dodata", rezervacija: results });
            }
        });
    }
}

export const ukloniRezervaciju = (req, res) => {
    const id = req.params.id;
    obrisiRezervaciju(id, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ message: "Rezervacija uspesno izbrisana" });
        }
    });
}