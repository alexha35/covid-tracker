import React, { useEffect, useState } from 'react';
import './App.css';
import DataContext from './Components/DataContext';
import axios from 'axios';
import { NumberBar } from './Components/NumberBar';
import { Graph } from './Components/Graph';
import { CountryDropDown } from './Components/CountryDropDown';

function App() {
    const [covidData, setCovidData] = useState({
        confirmed: undefined,
        deaths: undefined,
        recovered: undefined,
    });
    const [pickCountry, setPickCountry] = useState('');

    useEffect(() => {
        const getData = async () => {
            var query;
            if (!pickCountry || pickCountry === '') {
                query = `api`;
            } else {
                query = `api/countries/${pickCountry}`;
            }
            try {
                const { data } = await axios.get(
                    `https://covid19.mathdro.id/${query}`
                );
                setCovidData({
                    confirmed: data.confirmed.value,
                    deaths: data.deaths.value,
                    recovered: data.recovered.value,
                });
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [setCovidData, pickCountry]);

    return (
        <DataContext.Provider
            value={{
                covidData,
                pickCountry,
                setPickCountry,
            }}>
            <div className='App'>
                <h1 className='title'>Covid-19 Tracker</h1>
                <CountryDropDown />
                <NumberBar />
                <Graph />
            </div>
        </DataContext.Provider>
    );
}

export default App;
