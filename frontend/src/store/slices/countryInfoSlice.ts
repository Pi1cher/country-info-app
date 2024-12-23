import {ICountryInfo} from "../../interfaces/countryInfoInterface";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {countryService} from "../../services/countryService";
import { AxiosError} from "axios";



const initialState: ICountryInfo = {
    commonName: '',
    borders: [],
    population_data: {populationCounts: [{
            year: 0,
            value: 0
        }]},
    image_URL: {flag: ''},
    countryCode: '',
    name: ''

}

const byId = createAsyncThunk<ICountryInfo, { countryCode: string }>(
    'countryInfoSlice/byId',
    async ({countryCode}, {rejectWithValue}) => {
        try {
            const {data} = await countryService.byId(countryCode);
            return data
        } catch (error) {
            const err = error as AxiosError;
            return rejectWithValue(err as AxiosError);
        }
    }
)

const countryInfoSlice = createSlice({
    name: "countryInfoSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(byId.fulfilled, (state, action) => {
                state.commonName = action.payload.commonName;
                state.borders = action.payload.borders;
                state.population_data = action.payload.population_data;
                state.image_URL = action.payload.image_URL;
            })
})

const {reducer: countryInfoReducer, actions} = countryInfoSlice;

const countryInfoActions = {
    ...actions,
    byId
}

export {
    countryInfoActions,
    countryInfoReducer
}