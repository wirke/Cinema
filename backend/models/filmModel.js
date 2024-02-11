import db from "../config/database.js"

const getFilmovi = (result) => {
    db.query("SELECT * FROM film", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

const getFilm = (id, result) => {
    db.query("SELECT * FROM film WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            if (results.length === 0) {
                result({ message: "Film not found" }, null);
            } else {
                result(null, results[0]);
            }
        }
    });
}

const noviFilm = (data, result) => {
    if (!data.naziv || !data.zanr || !data.opis) {
        result({ message: "Missing required fields" }, null);
    } else {
        db.query("INSERT INTO film SET ?", [data], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    }
}

const obrisiFilm = (id, result) => {
    db.query("DELETE FROM film WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export { getFilmovi, getFilm, noviFilm, obrisiFilm };
