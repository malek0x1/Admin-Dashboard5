import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MainChart = ({matched,data}) => {
    return (
        <LineChart
            width={matched ? 200 : 500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#2E5FDE" strokeWidth={2} activeDot={{ r: 8 }} />
        </LineChart>
    )
}

export default MainChart