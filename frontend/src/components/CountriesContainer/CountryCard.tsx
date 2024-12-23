import React, {FC, PropsWithChildren} from 'react';
import {ICountryList} from "../../interfaces/countryListInterface";
import {ICountryInfo} from "../../interfaces/countryInfoInterface";
import {Link} from "react-router-dom";

interface IProps extends PropsWithChildren {
    country: ICountryInfo;
}

const CountryCard: FC<IProps> = ({country}) => {
    const {countryCode, name} = country;
    return (
        <div>
            <Link to={countryCode}>
                <div>{name}</div>
            </Link>
        </div>
    );
};

export default CountryCard;