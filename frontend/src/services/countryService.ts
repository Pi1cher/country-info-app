import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const countryService = {
    getAll: () => apiService.get(urls.countries.list),
    byId: (id: string) => apiService.get(urls.countries.byId(id))
}

export {
    countryService
}