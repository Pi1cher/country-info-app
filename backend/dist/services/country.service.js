"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countryService = void 0;
const axios_1 = __importDefault(require("axios"));
class CountryService {
    async findAll() {
        try {
            return await axios_1.default.get("https://date.nager.at/api/v3/AvailableCountries");
        }
        catch (e) {
            return e.message;
        }
    }
    async findById(id) {
        try {
            const response = await axios_1.default.get(`https://date.nager.at/api/v3/CountryInfo/${id}`);
            const { commonName, borders } = response.data;
            const population_data_response = await axios_1.default.post(`https://countriesnow.space/api/v0.1/countries/population`, { country: commonName });
            const { data: population_data } = population_data_response.data;
            const image_URL_response = await axios_1.default.post(`https://countriesnow.space/api/v0.1/countries/flag/images`, { country: commonName });
            const { data: image_URL } = image_URL_response.data;
            const country = { commonName, borders, population_data, image_URL };
            return country;
        }
        catch (e) {
            return e.message;
        }
    }
}
exports.countryService = new CountryService();
