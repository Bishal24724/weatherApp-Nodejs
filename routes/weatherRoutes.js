import express from "express";
import { getWeather } from "../controllers/weatherController.js";

const router = express.Router();

router.get("/", (req, res) => res.render("index", { weather: null, error: null }));
router.get("/weather", getWeather);


export default router;
