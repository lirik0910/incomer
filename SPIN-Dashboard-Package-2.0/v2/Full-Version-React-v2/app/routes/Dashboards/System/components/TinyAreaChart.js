import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {  
    ResponsiveContainer,
    AreaChart, 
    Area
} from './../../../../components/recharts';

import colors from './../../../../colors';

const TinyAreaChart = (props) => {
    const data = _.times(20, () => ({ pv: Math.random() * 100 }));
    return (
        <ResponsiveContainer width='100%' height={ 40 }>
            <AreaChart data={data}>
                <Area dataKey='pv' stroke={ colors[ props.strokeColor ] } fill={ colors[ props.fillColor ] } />
            </AreaChart>
        </ResponsiveContainer>
    )
};

TinyAreaChart.propTypes = {
    strokeColor: PropTypes.string,
    fillColor: PropTypes.string
};
TinyAreaChart.defaultProps = {
    strokeColor: "600",
    fillColor: "800",
};

export { TinyAreaChart };
