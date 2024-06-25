import React from "react";
import Chart from "react-apexcharts";
import { useLocation, useParams } from "react-router-dom";


const shapeLine = {
  series: [
    {
      name: "Audience",
      data: [800, 600, 1000, 800, 600, 1000, 800],
    },
  ],
  options: {
    chart: {
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: [""],
    tooltip: {
      theme: "light",
    },
    grid: {
      show: false,
    },
    yaxis: {
      axisBorder: {
        show: true, // Show the Y-axis border line
      },
      labels: {
        show: false, // Show the data labels on the Y-axis
      },
    },
    fill: {
      type: "solid",
      opacity: [0.1],
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [],
      axisBorder: {
        show: true, // Hide the X-axis line
      },
      labels: {
        position: "top", // Move X-axis categories to the top
        style: {
          fontSize: "10px", // Set the font size of X-axis categories
          padding: {
            left: 0,
          right: "20px",
          },
        },
      },
    },
  },
};


const ChartDays = ({color}) => {
  const { id } = useParams();
  const location = useLocation();
  const isOverviewPage = location.pathname === `/stories-details-page/${id}`;

  return (
    <>
      <div className="flex-none">
        <Chart
          options={shapeLine.options}
          series={shapeLine.series}
          type="bar"
          width={`${isOverviewPage ? "30%" : "40%"}`}
          height={`${isOverviewPage ? "200%" : "70%"}`}
        />
      </div>
    </>
  );
};

export default ChartDays;






// import React from "react";
// import { useLocation, useParams } from "react-router-dom";
// import ReactApexChart from "react-apexcharts";

// const ChartDays = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const isOverviewPage = location.pathname === `/stories-details-page/${id}`;

//   const options = {
//     chart: {
//       id: "basic-line",
//       toolbar: {
//         show: false, // Hide the zoom in and out buttons
//       },
//     },
//     xaxis: {
//       categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
//       axisBorder: {
//         show: true, // Hide the X-axis line
//       },
//       labels: {
//         position: "top", // Move X-axis categories to the top
//         style: {
//           fontSize: "10px", // Set the font size of X-axis categories
//         },
//       },
//     },
//     yaxis: {
//       labels: {
//         show: false, // Show the data labels on the Y-axis
//       },
//       axisBorder: {
//         show: true, // Show the Y-axis border line
//       },
//     },
//     stroke: {
//       curve: "smooth", // To make the line smooth
//       width: 2,
//       colors: isOverviewPage ? "#FFFFFF" : "#DC9249", // Orange if in /overview, White if in /stories
//     },
//     markers: {
//       show: true, // Hide the data points
//     },
//     // dataLabels: {
//     //   enabled: true, // Enable data labels
//     //   formatter: function (val, { seriesIndex, dataPointIndex, w }) {
//     //     // Display the data label only on the last data point
//     //     const isLastDataPoint = dataPointIndex === w.globals.series[seriesIndex].length - 1;
//     //     return isLastDataPoint ? val : "";
//     //   },
//     //   style: {
//     //     colors: ["#DC9249"],
//     //   },
//     // },
//     grid: {
//       show: false, // Hide data borders (grid lines)
//     },
//   };

//   const series = [
//     {
//       name: "Audience",
//       data: [2, 18, 25, 28, 40, 38, 55],
//     },
//   ];

//   return (
//     <div className="chart-container" style={{ width: isOverviewPage ? "220%" : "100%" }}>
//       <ReactApexChart options={options} series={series} type="line" height={310} />
//     </div>
//     // <img src="/chart/LineChart.png" alt="" className="w" />
//   );
// };

// export default Chart;
