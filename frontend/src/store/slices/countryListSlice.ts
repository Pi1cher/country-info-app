import {ICountryList} from "../../interfaces/countryListInterface";
import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {countryService} from "../../services/countryService";
import {AxiosError} from "axios";

const initialState : ICountryList = {
    countries: []
}

const getAll = createAsyncThunk<ICountryList>(
    'countryListSlice/getAll',
    async ( ) => {
        try {
            const {data} = await countryService.getAll()
            return data
        } catch (error){
            const err = error as AxiosError;
            return err
        }
    }
)

const countryListSlice = createSlice({
    name:"countryListSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addMatcher(isFulfilled(getAll), (state, action) => {
                state.countries = action.payload.countries
                console.log(action.payload)
            })
})

const {reducer: countryListReducer, actions} = countryListSlice;

const countryListActions = {
    ...actions,
    getAll
}

export {
    countryListReducer,
    countryListActions
}