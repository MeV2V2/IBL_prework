import React from 'react';
import { Vega } from 'react-vega';
import { VisualizationSpec } from 'vega-embed';


const spec: VisualizationSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v6.json',
    data: {
        values: [
            { a: 'C', b: 2 },
            { a: 'C', b: 7 },
            { a: 'C', b: 4 },
            { a: 'D', b: 1 },
            { a: 'D', b: 2 },
            { a: 'D', b: 6 },
            { a: 'E', b: 8 },
            { a: 'E', b: 4 },
            { a: 'E', b: 7 },
        ],
    },
    mark: 'bar',
    encoding: {
        y: { field: 'a', type: 'nominal' },
        x: { 
            aggregate: 'average',
            field: 'b',
            type: 'quantitative',
            axis: {
                title: 'Average of b',
            },
        },
    },
};

const BarChart: React.FC = () => {
    return (
        <div>
            <h1>Vega-Lite Test Graph</h1>
            <Vega spec={spec} actions={true} />
        </div>
    );
};


export default BarChart;