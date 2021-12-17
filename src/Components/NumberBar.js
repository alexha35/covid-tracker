import React, { useContext } from 'react';
import DataContext from './DataContext';

export const NumberBar = () => {
    const { covidData } = useContext(DataContext);
    return (
        <div className='numberBar-container'>
            <div
                style={{ backgroundColor: 'rgb(234, 241, 136)' }}
                className='numberBar-info'>
                {parseInt(covidData.confirmed).toLocaleString()}
                <h4>Confirmed</h4>
            </div>
            <div
                style={{ backgroundColor: 'rgb(234, 113, 136)' }}
                className='numberBar-info'>
                {parseInt(covidData.deaths).toLocaleString()} <h4>Deaths</h4>
            </div>
            <div
                style={{ backgroundColor: 'rgb(108, 173, 248)' }}
                className='numberBar-info'>
                {parseInt(covidData.recovered).toLocaleString()}
                <h4>Recoveries</h4>
            </div>
        </div>
    );
};
