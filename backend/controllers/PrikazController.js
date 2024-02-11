import { getPrikazi, getPrikaz, noviPrikaz, obrisiPrikaz } from '../models/PrikazModel.js';

export const sviPrikazi = (req, res) => {
    getPrikazi((err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(results);
        }
    });
};

export const prikaziPrikaz = (req, res) => {
    const id = req.params.id;
    getPrikaz(id, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            if (!results) {
                res.status(404).json({ message: "Prikaz nije pronađen" });
            } else {
                res.status(200).json(results);
            }
        }
    });
};

export const unesiPrikaz = (req, res) => {
    const data = req.body;
    if (!data.vremePrikaza || !data.id_film || !data.id_prostorija) {
        res.status(400).json({ error: "Nepotpuna forma" });
    } else {
        noviPrikaz(data, (err, results) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json({ message: "Prikaz uspešno dodat", prikaz: results });
            }
        });
    }
};

export const ukloniPrikaz = (req, res) => {
    const id = req.params.id;
    obrisiPrikaz(id, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ message: "Prikaz uspešno uklonjen" });
        }
    });
};
