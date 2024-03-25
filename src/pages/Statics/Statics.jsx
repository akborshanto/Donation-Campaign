import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

import UseDontation from './../../Hoook/UseDontation';
import UseLocalStorage from './../../utils/UseLocalStorage';

const Statics = () => {

  const {data:DontationChart}=UseDontation()
  const{localData}=UseLocalStorage()
  const data = [
    { name: 'Group A', value:localData.length },

    { name: 'Group D', value:DontationChart.length},
  ];
  
  const COLORS = ['#ff444a32', '#00C49F', '#b84afd4e', '#b84afd4e'];
  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  return (
    <div  style={{width:'100%',
  height:'100vh'
  }}>
    <ResponsiveContainer >
    <PieChart >
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={300}
        fill="#fb5200"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
    </div>
  )
}

export default Statics
