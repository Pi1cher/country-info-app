import { Router } from "express";

import { countryController } from "../controllers/country.controller";

const router = Router();

router.get("/GetAvailableCountries", countryController.findAll);

router.get("/:GetCountryInfo", countryController.findCountryInfo);

export const countryRouter = router;
