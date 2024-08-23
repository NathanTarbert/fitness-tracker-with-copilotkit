"use client";
import React from "react";
import { useState } from "react";
import { ProgressBar } from "../components/Progress";
import { ChartComponent } from "../components/Chart";
import { useCopilotReadable, useCopilotAction } from "@copilotkit/react-core";

export default function Reports() {
  const [chartData, setChartData] = useState<Chart[]>([
    { month: "January", sales: 350, customers: 80 },
    { month: "February", sales: 200, customers: 30 },
    { month: "March", sales: 1500, customers: 120 },
    { month: "April", sales: 1050, customers: 190 },
    { month: "May", sales: 1200, customers: 130 },
    { month: "June", sales: 550, customers: 140 },
    { month: "July", sales: 1200, customers: 130 },
    { month: "August", sales: 1100, customers: 130 },
    { month: "September", sales: 1500, customers: 130 },
    { month: "October", sales: 1200, customers: 170 },
    { month: "November", sales: 1200, customers: 130 },
    { month: "December", sales: 1200, customers: 130 },
  ]);

  const calculateTotal = (key: keyof Chart): number => {
    if (key === "sales")
      return chartData.reduce((acc, item) => acc + item.sales, 0);
    return chartData.reduce((acc, item) => acc + item.customers, 0);
  };

  //👇🏻 pass Chart data to CopilotKit
  useCopilotReadable({
    description:
      "The chart data is a list of sales and customers data for each month. You can update the data for each month. It contains the month, sales, and customers data.",
    value: chartData,
  });

  //👇🏻 action to update chartData
  useCopilotAction({
    name: "updateChartData",
    description: "Update the chart data for the a particular month.",
    parameters: [
      {
        name: "month",
        type: "string",
        description: "The month to update the data for.",
        required: true,
      },
      {
        name: "sales",
        type: "number",
        description: "The sales data for the month.",
        required: true,
      },
      {
        name: "customers",
        type: "number",
        description: "The customers data for the month.",
        required: true,
      },
    ],
    render: ({ status, args }) => {
      const { month, sales, customers } = args;
      if (month === undefined || sales === undefined || customers === undefined)
        return "";
      if (
        typeof month !== "string" ||
        typeof sales !== "number" ||
        typeof customers !== "number"
      )
        return "";

      const updateChart = () => {
        setChartData((prev) => {
          return prev.map((item) => {
            if (item.month === month) {
              return { month, sales, customers };
            }
            return item;
          });
        });
      };
      return (
        <div className="w-full p-2">
          <p className="text-sm text-blue-400 mb-2">Status: {status}</p>
          <ChartComponent chartData={[{ month, sales, customers }]} />
          <button
            className="px-4 py-2 bg-blue-400 text-white shadow rounded-md"
            onClick={updateChart}>
            Update
          </button>
        </div>
      );
    },
    handler: async ({ sales, customers, month }) => {
      setChartData((prev) => {
        return prev.map((item) => {
          if (item.month === month) {
            return { month, sales, customers };
          }
          return item;
        });
      });
    },
  });

  return (
    <div className=" ">
      <div className="mt-6">
        <ProgressBar />
        <div className="lg:w-1/2  h-[300px] w-full lg:mb-0 mb-4 pt-6 ">
          <ChartComponent chartData={chartData} />
        </div>
      </div>
    </div>
  );
}
