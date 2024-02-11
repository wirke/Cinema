import express from "express";
import { prikaziFilm, prikaziFilmove, unesiFilm, ukloniFilm } from "../controllers/FilmController.js";
import { getProstorije, prikaziProstoriju, unesiProstoriju, ukloniProstoriju } from "../controllers/ProstorijaController.js"
import { sviPrikazi, prikaziPrikaz, unesiPrikaz, ukloniPrikaz } from "../controllers/PrikazController.js"
import { prikaziRezervacije, prikaziRezervaciju, unesiRezervaciju, ukloniRezervaciju } from "../controllers/RezervacijaController.js"

const router = express.Router();

router.get("/FilmController/:id", prikaziFilm);
router.get("/FilmController", prikaziFilmove);
router.post("/FilmController", unesiFilm);
router.delete("/FilmController/:id", ukloniFilm);

router.get("/ProstorijaController", getProstorije);
router.get("/ProstorijaController", prikaziProstoriju);
router.post("/ProstorijaController", unesiProstoriju);
router.delete("ProstorijaController", ukloniProstoriju);

router.get("/PrikazController/:id", prikaziPrikaz);
router.get("/PrikazController", sviPrikazi);
router.post("/PrikazController", unesiPrikaz);
router.delete("/PrikazController", ukloniPrikaz);

router.get("/RezervacijaController/:id", prikaziRezervaciju);
router.get("/RezervacijaController", prikaziRezervacije);
router.post("/RezervacijaController", unesiRezervaciju);
router.get("/RezervacijaController", ukloniRezervaciju);


export default router;