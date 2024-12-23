import axios, { AxiosResponse } from "axios";

import { ICountry } from "../interfaces/country.interface";

class CountryService {
  public async findAll() {
    try {
      return await axios.get("https://date.nager.at/api/v3/AvailableCountries");
    } catch (e) {
      return e.message;
    }
  }

  public async findById(id: string): Promise<ICountry> {
    try {
      const response: AxiosResponse<ICountry> = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${id}`);
      const { commonName, borders } = response.data;
      const population_data_response = await axios.post(`https://countriesnow.space/api/v0.1/countries/population`, {country: commonName});
      const { data: population_data } = population_data_response.data;
      const image_URL_response = await axios.post(`https://countriesnow.space/api/v0.1/countries/flag/images`, {country: commonName});
      const { data: image_URL } = image_URL_response.data;
      const country = { commonName, borders, population_data, image_URL};
      return country;
    } catch (e){
      return e.message;
    }
  }
}

export const countryService = new CountryService();
