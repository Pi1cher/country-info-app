export interface ICountryInfo {
    commonName: string;
    borders: Array<{ commonName: string; countryCode: string }>;
    population_data: {populationCounts: [{
        year: number;
        value: number;
        }]};
    image_URL: {flag: string};
    countryCode: string;
    name: string;
}