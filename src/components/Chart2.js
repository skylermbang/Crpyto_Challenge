//REACT
import React, { useRef, useEffect } from "react";
// HELPER
import Chartjs from "chart.js";

const CrpytoChart = ({ data, time }) => {
    const chartRef = useRef();
    const { day, week, month, year } = data;
    console.log(time)


    const timeFormat = () => {
        switch (time) {
            case "day":
                return day;
            case "week":
                return week;
            case "month":
                return month;
            case "year":
                return year;
            default:
                return day;
        }
    };

    useEffect(() => {
        if (chartRef && chartRef.current) {

            // const chartInstance = new Chartjs(chartRef.current, {
            new Chartjs(chartRef.current, {
                type: "line",
                data: {
                    datasets: [
                        {
                            label: `${time}ly  Chart`,
                            data: timeFormat(),
                            backgroundColor: "rgba(36,59,255,0.8)",
                            borderColor: "blue",
                            pointRadius: 1,
                            tension: 1,
                            fill: false
                        },
                    ],
                },
                options: {
                    lineHeightAnnotation: {
                        always: true,
                        hover: false,
                        lineWeight: 1.5,
                    },

                    animation: {
                        duration: 2000,
                    },
                    maintainAspectRatio: false,
                    responsive: true,
                    scales: {
                        xAxes: [
                            {
                                type: "time",
                                distribution: "linear",
                            },
                        ],
                    },
                },
            });
        }
    });


    return (
        <div className="bg-white border mt-2 rounded p-3">

            <div>
                <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>
            </div>

            <div className="chart-button mt-1">

            </div>
        </div>
    );
};

export default CrpytoChart;