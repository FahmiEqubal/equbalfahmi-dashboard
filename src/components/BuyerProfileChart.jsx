import React from "react";
import Chart from "react-apexcharts";

export default function BuyerProfilePieChart() {
  const chartData = {
    series: [64, 32, 12],
    options: {
      chart: {
        type: "donut",
      },
      labels: ["A", "B", "C"],
      title: {
        text: "",
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true, 
              total:{
                show: true,
                text: "Total Sales",
                fontSize: 30,
                color: '#f90000'
              }
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    }
  }

  return (
    <div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
      <strong className="text-gray-700 font-medium">Customers</strong>
      <p className="text-gray-400 font-small">Customers that buy products</p>
      <div className="mt-3 w-full flex-1 text-xs">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="donut"
          width={300}
          height={250}
        />
      </div>
    </div>
  );
}
