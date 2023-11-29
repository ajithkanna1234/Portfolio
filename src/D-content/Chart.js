
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function Charts() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            datasets: [
                {
                    data: [100,100,50,50,50,10,10],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-300'), 
                        documentStyle.getPropertyValue('--yellow-300'), 
                        documentStyle.getPropertyValue('--green-300'),
                        documentStyle.getPropertyValue('--red-300'),
                        documentStyle.getPropertyValue('--gray-300'),
                        documentStyle.getPropertyValue('--purple-300'),
                        documentStyle.getPropertyValue('--cyan-300'),
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'), 
                        documentStyle.getPropertyValue('--yellow-400'), 
                        documentStyle.getPropertyValue('--green-400'),
                        documentStyle.getPropertyValue('--red-400'),
                        documentStyle.getPropertyValue('--gray-400'),
                        documentStyle.getPropertyValue('--purple-400'),
                        documentStyle.getPropertyValue('--cyan-400'),
                    ]
                }
            ]
        };
        const options = {
            cutout: '60%',
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="container-sm h-[50%] w-[50%] p-4 ">
            <Chart type="doughnut" data={chartData} options={chartOptions} />
        </div>
    )
}
        