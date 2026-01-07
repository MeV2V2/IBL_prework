import React, { useEffect, useRef } from 'react';
import embed, { type VisualizationSpec } from 'vega-embed';

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
    // 1. Create a reference to the DOM element
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 2. Embed the chart when the component mounts
        if (containerRef.current) {
            embed(containerRef.current, spec).catch((err) => {
                console.error("Vega Embed Error:", err);
            });
        }
    }, []);

    return (
        <div>
            <h1>Vega-Lite Test Graph</h1>
            {/* 3. The div where Vega will inject the graph */}
            <div ref={containerRef} style={{ width: '100%' }} />
        </div>
    );
};

export default BarChart;