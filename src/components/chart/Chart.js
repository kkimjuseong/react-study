import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({dataPoints}) => {
    return (
        <div className="chart">
            {
                // map 사용할때 key 값 중요 무조건 넣어야함
                dataPoints
                    .map(dp => <ChartBar key={dp.label} label={dp.label}/>)
            }
        </div>
    );
};

export default Chart;