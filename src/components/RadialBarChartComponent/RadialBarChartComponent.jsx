import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ["#0043C1", "#AA1233", "#3C0BC1", "#0C1618", "#004643", "#F65A0B"];

function RadialBarChartComponent({ data }) {
  // Calcula el total de todos los montos
  const total = data.reduce((sum, item) => sum + item.amount, 0);

  // Función para generar las etiquetas dentro del gráfico
  const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5; // Ajusta la posición dentro del círculo
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={12}>
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="80%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={80} // Hace que sea un gráfico de dona
          outerRadius={150}
          fill="#8884d8"
          dataKey="amount"
          nameKey="category"
          label={renderLabel} // Muestra el porcentaje dentro del círculo
          labelLine={false} // Elimina las líneas externas de las etiquetas
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" width="100%" height={70} />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default RadialBarChartComponent;
