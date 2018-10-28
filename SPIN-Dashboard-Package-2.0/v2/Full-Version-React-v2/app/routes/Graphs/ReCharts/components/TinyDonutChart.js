import React from 'react';
import {  
    PieChart, 
    Pie,
    Cell
} from './../../../../components/recharts';

import colors from './../../../../colors';

const data = [
    {name: 'Group A', value: 400},
    {name: 'Group B', value: 300},
    {name: 'Group C', value: 300},
    {name: 'Group D', value: 200}
];

const COLORS = [ colors['info'], colors['info-07'], colors['primary-08'], colors['purple']];

const TinyDonutChart = () => (
    <PieChart width={ 30 } height={ 30 }>
        <Pie
            data={data}
            dataKey="value"
            stroke={ colors['900'] }
            innerRadius={ 8 }
            outerRadius={ 15 } 
            fill="#8884d8"
        >
            {
                data.map((entry, index) => <Cell key={ index } fill={COLORS[index % COLORS.length]} />)
            }
        </Pie>
    </PieChart>
);

export { TinyDonutChart };
