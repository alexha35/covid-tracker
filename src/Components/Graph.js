import React, { useEffect, useState, useMemo } from 'react';
import { Chart } from 'react-charts';

import axios from 'axios';
export const Graph = () => {
	const [dailyData, setDailyData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		const getData = async () => {
			const { data } = await axios.get(`https://api.covidtracking.com/v1/us/daily.json`);
			setDailyData(data);
			setLoading(false);
		};
		getData();
	}, [setDailyData]);

	//X Y
	const dataPoints = useMemo(
		() => [
			{
				label: 'Confirmed',
				data: dailyData.map((data) => {
					return [data.date, data.positive];
				}),
			},
			{
				label: 'Deaths',
				data: dailyData.map((data) => {
					return [data.date, data.death];
				}),
			},
			{
				label: 'Recovered',
				data: dailyData.map((data) => {
					return [data.date, data.recovered];
				}),
			},
		],
		[dailyData]
	);

	const axes = useMemo(
		() => [
			{ primary: true, type: 'linear', position: 'bottom' },
			{ type: 'linear', position: 'left' },
		],
		[]
	);

	return (
		<div className='graph-container'>
			{loading ? <h2>Loading....</h2> : <Chart data={dataPoints} axes={axes} />}
		</div>
	);
};
