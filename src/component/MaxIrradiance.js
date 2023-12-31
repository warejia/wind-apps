import React, { useState } from 'react';

const weatherApi = {
  key: '9f23b56e8dcad8299bf4e5a2a3fc932b',
  baseUrl: 'https://api.openweathermap.org/data/2.5/weather'
};

const MaxIrradianceCalculator = () => {
  const [locationInput, setLocationInput] = useState('');
  const [irradianceInput, setIrradianceInput] = useState('');
  const [maxIrradiance, setMaxIrradiance] = useState(null);

  const handleLocationChange = (event) => {
    setLocationInput(event.target.value);
  };

  const handleIrradianceChange = (event) => {
    setIrradianceInput(event.target.value);
  };

  const calculateMaxIrradiance = () => {
    const irradiance = parseFloat(irradianceInput);
    if (!isNaN(irradiance)) {
      setMaxIrradiance(irradiance);
      setIrradianceInput(''); // Clear the input field
    }
  };

  const handleAutoFill = () => {
    if (locationInput) {
      getWeatherReport(locationInput)
        .then((data) => {
          const irradiance = data.main.temp;
          setIrradianceInput(irradiance.toString());
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleClear = () => {
    setLocationInput('');
    setIrradianceInput('');
    setMaxIrradiance(null);
  };

  const getWeatherReport = async (city) => {
    try {
      const response = await fetch(
        `${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter location"
        value={locationInput}
        onChange={handleLocationChange}
      />

      <input
        type="text"
        placeholder="Enter irradiance value"
        value={irradianceInput}
        onChange={handleIrradianceChange}
      />

      <button onClick={calculateMaxIrradiance}>Calculate Max Irradiance</button>
      <button onClick={handleAutoFill}>Auto Fill Max Irradiance</button>
      <button onClick={handleClear}>Clear</button>

      {maxIrradiance && (
        <div>
          <p>Max Irradiance: {maxIrradiance}</p>
        </div>
      )}
    </div>
  );
};

export default MaxIrradianceCalculator;
