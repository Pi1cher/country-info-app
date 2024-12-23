import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {Link, useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppSelector";
import {countryListActions} from "../../store/slices/countryListSlice";
import {countryInfoActions} from "../../store/slices/countryInfoSlice";
import {log} from "node:util";

const CountryInfo = () => {

    const dispatch = useAppDispatch();
    const {countryCode} = useParams();


    const { commonName, borders, population_data, image_URL} = useAppSelector(state => state.countryInfo)

    useEffect(() => {
        dispatch(countryInfoActions.byId({countryCode}))
    }, [dispatch, countryCode]);

    console.log(commonName)
    return (
        <div>
            <div>{commonName}</div>
            <div>borders: {borders.map(border => <div key={border.countryCode}><Link to={'/'+border.countryCode}>{border.commonName}</Link></div>)}</div>
            <div>population_data: {population_data.populationCounts.map(count => <div key={count.year}> value: {count.value}</div> )}</div>
            <div>image_URL: {image_URL.flag}</div>
        </div>
    );
};

export default CountryInfo;