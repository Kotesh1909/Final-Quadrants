import React from "react";
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS, LinearScale, CategoryScale, BarElement, ArcElement, LineElement, PointElement, Tooltip, Legend, Title, scales,
  SubTitle,
} from "chart.js";


ChartJS.register(
  LinearScale, CategoryScale, BarElement, ArcElement, LineElement, PointElement, Tooltip, Legend, Title, SubTitle);


  
const barLabels = [
  "Battery Disposal",
  "Desktop Recycling",
  "Laptop Recycling",
  "Miscellaneous",
  "Mobile Phone Recycling",
  "Printer Recycling",
  "TV Recycling",
];

const barData = {
  labels: barLabels,
  datasets: [
    {
      label: "Volume of Waste (kg)",
      data: [197.44, 191.74, 311.89, 285.8, 244.61, 272.61, 248.12],
      backgroundColor: "green",
    },
  ],
};

const barOptions = {
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Total Volume of Waste Collected",
    },
    font:{
      fontsize:"24",
    },
  },
};


// horizontal bar chart
const horizontalBarLabels = ["Battery Disposal",
  "Desktop Recycling",
  "Laptop Recycling",
  "Miscellaneous",
  "Mobile Phone Recycling",
  "Printer Recycling",
  "TV Recycling"];
const horizontalBarData = {
  labels: horizontalBarLabels,
  datasets: [
    {
      axis: 'y',
      label: "Energy Conserved  (kWh) in Week 4",
      data: [397.6, 172.01, 520.2, 635.82, 326.36, 1008.59, 167.99],
      backgroundColor: "#00FF00",
    },
  ],
};

const horizontalBarOptions = {
  indexAxis: 'y',
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Energy Conserved by each Service type in Week 4",
    },
  },
};


// Distribution of Disposal Fees
const bardistributionLabels = Array.from({ length: 100 }, (_, i) => ` ${i + 1}`);
const bardistributionData = {
  labels: bardistributionLabels,
  datasets: [
    {
      label: "Distribution of Disposal Fees",
      data: [
        13.69, 35.2, 6.78, 70.43, 17.48, 23, 22.07, 46.45, 7.84, 31.22, 35.93, 35.9,
        41.71, 56.74, 8.22, 30.92, 38.02, 26.05, 31.07, 36.32, 12.48, 11.85, 24.67,
        24.52, 42.26, 20.97, 12.62, 12.53, 25.77, 16.77, 72.71, 14.47, 32.6, 25.27,
        7.63, 11.92, 28.66, 21.25, 34.36, 34.81, 25.51, 19.42, 25.77, 33.78, 8.29,
        7.3, 73.36, 43.43, 20.85, 37.24, 25.65, 38.73, 17.48, 47.23, 23.97, 20.3,
        16.29, 25.49, 30.03, 13.83, 31.67, 40.45, 67.36, 22.17, 41.22, 36.94, 14.07,
        15.3, 26.24, 27.47, 17.03, 16.13, 21.37, 10.58, 13.49, 10.64, 23.4, 25.6,
        24.91, 22.19, 15.27, 18.36, 45.17, 48.82, 67.22, 14.43, 11.99, 7.6, 62.72,
        32.93, 10.49, 10.74, 42.17, 22.1, 17.11, 26.35, 17.62, 18.13, 16.2, 35.07,
      ],
      backgroundColor: "#09AF00",
      borderColor: "#09AF00",
    },
  ],
};


const bardistributionOptions = {
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Distribution of Disposal Fees",
    },


  },
};

// Pie chart data and options
const pieData = {
  labels: barLabels,
  datasets: [
    {
      label: "Recycling Distribution (%)",
      data: [31.31, 37.05, 35.67, 42.58, 41.48, 39.25, 28.13],
      backgroundColor: [
        "#008B00",
        "#09AF00",
        "#00FF00",
        "#41C300",
        "#AAF255",
        "#90EE02",
        "#C6F68D",
      ],
      borderWidth: 1,
    },
  ],
};

const pieOptions = {
  plugins: {
    title: {
      display: true,
      text: "Recycling Distribution by Service Type",
    },
    legend: {
      position: "bottom",
    },
  },
};

// Line chart data and options
const lineLabels = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];
const lineData = {
  labels: lineLabels,
  datasets: [
    {
      label: "Greenhouse Gas Emissions Reduced (kg CO₂e)",
      data: [1103.78, 809.25, 961.83, 1225.98, 460.4],
      borderColor: "#AAF255",
      backgroundColor: "#09AF00",
      tension: 0.4,
    },
    {
      label: "Carbon Emissions Reduced (kg)",
      data: [807.16, 789.8, 687.13, 996.27, 327.5],
      borderColor: "#00FF00",
      backgroundColor: "#008B00",
      tension: 0.4,
    },
  ],
};

const lineOptions = {
  plugins: {
    title: {
      display: true,
      text: "Reduction in Carbon and GHG Emissions Across Weeks",
    },
    legend: {
      position: "top",
    },
  },
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// Waste category by across week
const categoryBarLabels = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];
const categoryBarData = {
  labels: categoryBarLabels,
  datasets: [
    {
      label: "Large",
      data: [107.97, 165.38, 57.67, 85.39, 0],
      backgroundColor: "#00FF00",
    },
    {
      label: "Medium",
      data: [218.21, 183.84, 270.25, 340.89, 170.94],
      backgroundColor: "#AAF255",
    },
    {
      label: "Small",
      data: [24.72, 40.84, 43.09, 43.02, 0],
      backgroundColor: "#61D810",
    },
  ],
};

const categoryBarOptions = {
  plugins: {
    title: {
      display: true,
      text: "Total Volume of Waste Collected by Category Across Weeks",
    },
    legend: {
      position: "top",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};



// Percentage of Waste Category Distribution	
const categoryDoughnutData = {
  labels: ["Large", "Medium", "Small"],
  datasets: [
    {
      label: "Percentage of Waste Category Distribution",
      data: [15, 64, 21],
      backgroundColor: [
        '#00FF00',
        '#AAF255',
        '#61D810'
      ],
      borderWidth: 1,
    }
  ],
};

const categorydoughnutOptions = {
  plugins: {
    title: {
      display: true,
      text: "Percentage of Waste Category Distribution",
    },
    legend: {
      position: "bottom",
    },
  },
  responsive: true,
};


// Weekly Job Completion Trend
const lineweekLabels = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];
const lineweekData = {
  labels: lineweekLabels,
  datasets: [
    {
      label: "Number of Jobs Completed",
      data: [20, 20, 22, 28, 10],
      borderColor: "#00ff00",
      backgroundColor: "blue",
      tension: 0.1,
      fill: 'origin',
    },
  ],
};

const lineweekOptions = {
  plugins: {
    title: {
      display: true,
      text: "Weekly Job Completion Trend",
    },
    legend: {
      position: "top",
    },
  },
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};



function Dashboard({ sidebarToggle, setSidebarToggle }) {
  return (
    <div className={`${sidebarToggle ? "" : " ml-0 "} w-full`}>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-8 lg:mx-16 py-5">

        <div className="bg-white p-4 rounded-lg shadow-md lg:col-span-1">
          <p className="font-bold">Number of E-Waste Collection Jobs Fulfilled - 100</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md lg:col-span-1">
          <p className="font-bold">Average disposal fee for Collection jobs - 27.0583	</p>
        </div>


        <div className="bg-white p-4 rounded-lg shadow-md lg:col-span-2">
          <Bar data={barData} options={barOptions} />
        </div>


        <div className="bg-white p-4 rounded-lg shadow-md lg:col-span-2">
          <Bar data={bardistributionData} options={bardistributionOptions} />
        </div>


        <div className="bg-white p-4 rounded-lg shadow-md">
          <Pie data={pieData} options={pieOptions} />
        </div>


        <div className="bg-white p-4 rounded-lg shadow-md">
          <Doughnut data={categoryDoughnutData} options={categorydoughnutOptions} />
        </div>


        <div className="bg-white p-4 rounded-lg shadow-md lg:col-span-2">
          <Line data={lineData} options={lineOptions} />
        </div>


        <div className="bg-white p-4 rounded-lg shadow-md lg:col-span-2">
          <Bar data={categoryBarData} options={categoryBarOptions} />
        </div>


        <div className="bg-white p-4 rounded-lg shadow-md lg:col-span-2">
          <Line data={lineweekData} options={lineweekOptions} />
        </div>


        <div className="bg-white p-4 rounded-lg shadow-md lg:col-span-2">
          <Bar data={horizontalBarData} options={horizontalBarOptions} />
        </div>
      </div>
    </div>

  );
}

export default Dashboard;
