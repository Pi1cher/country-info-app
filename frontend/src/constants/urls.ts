const baseURL = "http://localhost:3001"

const urls = {
    countries:{
        list: '/GetAvailableCountries',
        byId: (countryId:string):string => `/${countryId}`
    }
}
export {
    urls,
    baseURL
}