import { getFilmovi, getFilm, noviFilm, obrisiFilm } from "../models/FilmModel.js";

export const prikaziFilmove = (req, res) => {
    getFilmovi((err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(results);
        }
    });
}

export const prikaziFilm = (req, res) => {
    const id = req.params.id;
    getFilm(id, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            if (!results) {
                res.status(404).json({ message: "Film nije nadjen" });
            } else {
                res.status(200).json(results);
            }
        }
    });
}

export const unesiFilm = (req, res) => {
    const data = req.body;
    if (!data.naziv || !data.zanr || !data.opis) {
        res.status(400).json({ error: "Nepotpuna forma" });
    } else {
        noviFilm(data, (err, results) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json({ message: "Film uspesno dodat", film: results });
            }
        });
    }
}

export const ukloniFilm = (req, res) => {
    const id = req.params.id;
    obrisiFilm(id, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ message: "Film uspesno izbrisan" });
        }
    });
}
