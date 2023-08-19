import React from 'react';
import { useQuery } from 'react-query';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface CaseData {
  cases: Record<string, number>;
}

const LineGraph: React.FC = () => {
  const { data } = useQuery<CaseData>('casesHistory', () =>
    fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all').then((response) =>
      response.json()
    )
  );

  const casesData = data?.cases;

  const chartData = casesData
    ? Object.keys(casesData).map((date) => ({
        date,
        cases: casesData[date],
      }))
    : [];

  return (
    <div className="mt-4 w-full">
      <h2 className="text-xl font-semibold mb-2">Cases Fluctuations</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cases" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineGraph;
