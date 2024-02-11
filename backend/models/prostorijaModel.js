import db from "../config/database.js"

const sveProstorije = (result) => {
    db.query("SELECT * FROM prostorija", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

const getProstorija = (id, result) => {
    db.query("SELECT * FROM prostorija WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            if (results.length === 0) {
                result({ message: "Prostorija not found" }, null);
            } else {
                result(null, results[0]);
            }
        }
    });
}

const kreirajProstoriju = (data, result) => {
    if (!data.ime || !data.visinaProstorije || !data.duzinaProstorije) {
        result({ message: "Missing required fields" }, null);
    } else {
        db.query("INSERT INTO prostorija SET ?", [data], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    }
}

const obrisiProstoriju = (id, result) => {
    db.query("DELETE FROM prostorija WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export { sveProstorije, getProstorija, kreirajProstoriju, obrisiProstoriju };