import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {countryListActions} from "../../store/slices/countryListSlice";
import CountryCard from "./CountryCard";

const CountriesList = () => {


    const {countries} = useAppSelector(state => state.countryList);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(countryListActions.getAll())
    }, [dispatch]);
    console.log(countries)

    return (
        <div>
            {countries.map(country => <CountryCard country={country} key={country.countryCode}/>)}
            
        </div>
    );
};

export default CountriesList;