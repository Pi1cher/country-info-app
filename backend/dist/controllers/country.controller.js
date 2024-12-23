"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countryController = void 0;
const country_service_1 = require("../services/country.service");
class CountryController {
    async findAll(req, res, next) {
        try {
            const countries = await country_service_1.countryService.findAll();
            return res.json({ countries: [...countries.data] });
        }
        catch (e) {
            next(e);
        }
    }
    async findCountryInfo(req, res, next) {
        try {
            const countryId = req.params.GetCountryInfo;
            const country = await country_service_1.countryService.findById(countryId);
            console.log(country);
            return res.json(country);
        }
        catch (e) {
            next(e);
        }
    }
}
exports.countryController = new CountryController();
