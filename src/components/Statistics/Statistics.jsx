import React from "react";
import {
  Bar,
  ComposedChart,
  Legend,
  Line,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "A1",
      mark: 60,
    },
    {
      name: "A2",
      mark: 60,
    },
    {
      name: "A3",
      mark: 60,
    },
    {
      name: "A4",
      mark: 50,
    },
    {
      name: "A5",
      mark: 60,
    },
    {
      name: "A6",
      mark: 54,
    },
    {
      name: "A7",
      mark: 60,
    },
    {
      name: "A8",
      mark: 60,
    },
  ];
  return (
    <div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie
            dataKey="value"
            data={data02}
            cx={500}
            cy={200}
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
