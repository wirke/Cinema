import db from "../config/database.js"

const getRezervacije = (result) => {
    db.query("SELECT * FROM rezervacija", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

const getRezervacija = (id, result) => {
    db.query("SELECT * FROM rezervacija WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            if (results.length === 0) {
                result({ message: "Rezervacija not found" }, null);
            } else {
                result(null, results[0]);
            }
        }
    });
}

const novaRezervacija = (data, result) => {
    if (!data.sediste || !data.datum || !data.imeKupca || !data.prikaz_id) {
        result({ message: "Missing required fields" }, null);
    } else {
        db.query("INSERT INTO rezervacija SET ?", [data], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
    }
}

const obrisiRezervaciju = (id, result) => {
    db.query("DELETE FROM rezervacija WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export { getRezervacija, getRezervacije, novaRezervacija, obrisiRezervaciju };