import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function BarChartComponent({data, color}) {
  return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={ data } width={500} height={300} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="date"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill={color}/>
        </BarChart>
      </ResponsiveContainer>
  )
}

export default BarChartComponent