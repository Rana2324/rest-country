import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name,capital,population,flags,region} = props.country;
    return (
        <div className="country">
            <h3>This is: {name.common}</h3>
            <img src = {flags.svg} alt="" />
            <p><small>Region: {region}</small></p>
            <p>Capital: {capital} Populations: {population}</p>
           
        </div>
    );
};

export default Country;