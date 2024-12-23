import {configureStore} from "@reduxjs/toolkit";
import {countryListReducer} from "./slices/countryListSlice";
import {countryInfoReducer} from "./slices/countryInfoSlice";

const store = configureStore({
    reducer:{
        countryList: countryListReducer,
        countryInfo: countryInfoReducer
    }
});

export {
    store
}