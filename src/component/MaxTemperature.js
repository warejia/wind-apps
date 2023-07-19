import React, { useState } from 'react';

const weatherApi = {
  key: '31b28b6a06ae95c090894df6bdbb11ec',
  baseUrl: 'https://api.openweathermap.org/data/2.5/weather'
};

const MaxTemperature = () => {
  const [locationInput, setLocationInput] = useState('');
  const [temperatureInput, setTemperatureInput] = useState('');
  const [maxTemperature, setMaxTemperature] = useState(null);

  const handleLocationChange = (event) => {
    setLocationInput(event.target.value);
  };

  const handleTemperatureChange = (event) => {
    setTemperatureInput(event.target.value);
  };

  const calculateMaxTemperature = () => {
    const temperature = parseFloat(temperatureInput);
    if (!isNaN(temperature)) {
      setMaxTemperature(temperature);
      setTemperatureInput(''); // Clear the input field
    }
  };

  const handleAutoFill = () => {
    if (locationInput) {
      getWeatherReport(locationInput)
        .then((data) => {
          const temperature = data.main.temp;
          setTemperatureInput(temperature.toString());
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleClear = () => {
    setLocationInput('');
    setTemperatureInput('');
    setMaxTemperature(null);
  };

  const getWeatherReport = async (city) => {
    try {
      const response = await fetch(
        `${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`
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
        placeholder="Enter temperature"
        value={temperatureInput}
        onChange={handleTemperatureChange}
      />

      <button onClick={calculateMaxTemperature}>Calculate Max Temperature</button>
      <button onClick={handleAutoFill}>Auto Fill Max Temperature</button>
      <button onClick={handleClear}>Clear</button>

      {maxTemperature && (
        <div>
          <p>Max Temperature: {maxTemperature} °C</p>
        </div>
      )}
    </div>
  );
};

export default MaxTemperature;
