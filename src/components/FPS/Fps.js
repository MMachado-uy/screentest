import { useState } from 'react'; import React from 'react';
import { Line } from 'react-chartjs-2';

import useInterval from '../../utils/useInterval';

const getFPS = () =>
    new Promise(resolve =>
        requestAnimationFrame(t1 =>
            requestAnimationFrame(t2 => resolve(1000 / (t2 - t1)))
        )
    )
    
const Fps = () => {
    const [fpsHistory, setFpsHistory] = useState(['N/A']);

    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [
            {
                label: 'FPS',
                data: fpsHistory.map(e => e),
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            }
        ]
    };
    
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: false,
                    }
                }
            ],
            xAxes: [{
                min: 10,
                suggestedMax: 10
            }]
        },
        animation: false
    };

    useInterval(() => {
        const calc = async () => {
            const newfps = await getFPS();
            
            setFpsHistory(curr => {
                if (curr.length === 10) {
                    return [...curr.filter((c, i) => i > 0), newfps.toFixed(4)];
                } else {
                    return [...curr, newfps.toFixed(4)];
                }
            })
        }

        calc();
    }, 5000);

    return (
        <div className="Fps">
            {Number(fpsHistory[fpsHistory.length -1])} fps
            <Line data={data} options={options} />
        </div>
    )
}

export default Fps;
