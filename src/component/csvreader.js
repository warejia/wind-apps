import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const MaxWindSpeedCalculator = () => {
  const [maxWindSpeed, setMaxWindSpeed] = useState(0);

  const calculateMaxWindSpeed = async () => {
    const response = await fetch('data.csv');
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csvData = decoder.decode(result.value);

    // Parse CSV data
    Papa.parse(csvData, {
      header: true,
      complete: (parsedData) => {
        const windSpeeds = parsedData.data.map((row) => parseFloat(row['Basel Wind Speed [10 m]']));
        const maxSpeed = Math.max(...windSpeeds);
        setMaxWindSpeed(maxSpeed);
      },
    });
  };

  return (
    <div>
      <h1>Maximum Wind Speed: {maxWindSpeed}</h1>
      <button onClick={calculateMaxWindSpeed}>Calculate</button>
    </div>
  );
};

export default MaxWindSpeedCalculator;