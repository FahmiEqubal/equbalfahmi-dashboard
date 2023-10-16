import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function TransactionChart() {
  const getRevenue = () => {
    return fetch('https://dummyjson.com/carts')
      .then((res) => res.json())
      .then((data) => data);
  };

  const [revenueData, setRevenueData] = useState([]);

  useEffect(() => {
    getRevenue().then((res) => {
      const data = res.carts.map((cart) => {
        return {
        //   name: `User-${cart.userId}`,
          Income: cart.discountedTotal,
        };
      });
      setRevenueData(data);
    });
  }, []);

  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">Overview</strong>
      <p className="text-gray-300 font-small">Monthly Earnings</p>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Income" fill="rgb(91 33 182)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
