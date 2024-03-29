import db from "../config/database.js";

const getPrikazi = (result) => {
    db.query("SELECT * FROM prikaz", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};

const getPrikaz = (id, result) => {
    db.query("SELECT p.*, f.nazivFilma AS nazivFilma, pr.naziv AS nazivProstorije, p.cenaKarte AS cenaKarte FROM prikaz p LEFT JOIN film f ON p.id_film = f.id LEFT JOIN prostorija pr ON p.id_prostorija = pr.id WHERE p.id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            if (results.length === 0) {
                result({ message: "Prikaz not found" }, null);
            } else {
                result(null, results[0]);
            }
        }
    });
};

const getPrikaziZaFilmId = (filmId, result) => {
    db.query("SELECT * FROM prikaz WHERE id_film = ?", [filmId], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};

const noviPrikaz = (data, result) => {
    if (!data.vremePrikaza || !data.id_film || !data.id_prostorija || !data.cenaKarte) {
        result({ message: "Missing required fields" }, null);
    } else {
        db.query("INSERT INTO prikaz SET ?", [data], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    }
};

const obrisiPrikaz = (id, result) => {
    db.query("DELETE FROM prikaz WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};

export { getPrikaz, getPrikazi, getPrikaziZaFilmId, noviPrikaz, obrisiPrikaz };
