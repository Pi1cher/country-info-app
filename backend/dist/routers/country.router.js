"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countryRouter = void 0;
const express_1 = require("express");
const country_controller_1 = require("../controllers/country.controller");
const router = (0, express_1.Router)();
router.get("/GetAvailableCountries", country_controller_1.countryController.findAll);
router.get("/:GetCountryInfo", country_controller_1.countryController.findCountryInfo);
exports.countryRouter = router;
