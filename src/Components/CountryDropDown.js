import React, { useContext } from 'react';

import countries from '../StaticData/countries.json';
import DataContext from './DataContext';

export const CountryDropDown = () => {
    const { setPickCountry } = useContext(DataContext);

    return (
        <div className='dropDown-Container'>
            <form className='countryPicker-form'>
                <label style={{ margin: '0 1rem' }} htmlFor='country'>
                    <b>Country :</b>
                </label>
                <select
                    onChange={(e) => {
                        setPickCountry(e.target.value);
                    }}
                    style={{
                        padding: '.1rem ',
                        margin: '0 .5rem 0 0',
                        width: '35%',
                    }}
                    name='country'
                    id='countryPicker'>
                    {countries.countries.map((country, i) => (
                        <option key={i} value={country.iso3}>
                            {country.name}
                        </option>
                    ))}
                    <option value=''>Global</option>
                </select>
            </form>
        </div>
    );
};
