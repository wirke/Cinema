import express from "express";
import { prikaziFilm, prikaziFilmove, unesiFilm, ukloniFilm } from "../controllers/FilmController.js";
import { getProstorije, unesiProstoriju, ukloniProstoriju } from "../controllers/ProstorijaController.js"

const router = express.Router();

router.get("/FilmController/:id", prikaziFilm);
router.get("/FilmController", prikaziFilmove);
router.post("/FilmController", unesiFilm);
router.delete("/FilmController/:id", ukloniFilm);

router.get("/ProstorijaController", getProstorije);
router.post("/ProstorijaController", unesiProstoriju);
router.delete("ProstorijaController", ukloniProstoriju);

export default router;