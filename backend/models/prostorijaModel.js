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

const kreirajProstoriju = (data, result) => {
    if (!data.ime || !data.visinaProstorije || !data.duzinaProstorije || !data.cenaSedista) {
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
//napisi getProstorija

export { sveProstorije, kreirajProstoriju, obrisiProstoriju };