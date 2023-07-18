import React, { useEffect, useState } from 'react';
import { Chart } from 'chart.js';

const WindDataChart = () => {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const createChart = () => {
      const ctx = document.getElementById('windChart').getContext('2d');

      // Generate random data (replace with your actual wind data)
      const windData = [5, 6, 7, 8, 9, 10, 11];
      const timestamps = ['2022-01-01', '2022-01-02', '2022-01-03', '2022-01-04', '2022-01-05', '2022-01-06', '2022-01-07'];

      // Create the chart
      const newChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: timestamps,
          datasets: [
            {
              label: 'Wind Speed',
              data: windData,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              fill: 'start',
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      setChart(newChart);
    };

    createChart();
  }, []);

  return <canvas id="windChart" />;
};

export default WindDataChart;
