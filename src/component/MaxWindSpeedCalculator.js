import React, { useState } from 'react';

const MaxWindSpeedCalculator = () => {
  const [locationInput, setLocationInput] = useState('');
  const [windSpeedInput, setWindSpeedInput] = useState('');
  const [maxWindSpeed, setMaxWindSpeed] = useState(null);

  const weatherApi = {
    key: '9f23b56e8dcad8299bf4e5a2a3fc932b',
    baseUrl: 'https://api.openweathermap.org/data/2.5/forecast'
  };

  const handleLocationChange = (event) => {
    setLocationInput(event.target.value);
  };

  const handleWindSpeedChange = (event) => {
    setWindSpeedInput(event.target.value);
  };

  const calculateMaxWindSpeed = () => {
    const windSpeed = parseFloat(windSpeedInput);
    if (!isNaN(windSpeed)) {
      setMaxWindSpeed(windSpeed);
      setWindSpeedInput(''); // Clear the input field
    }
  };

  const handleAutoFill = () => {
    if (locationInput) {
      getWeatherForecast(locationInput)
        .then((data) => {
          const windSpeeds = data.list.map((item) => item.wind.speed);
          const maxSpeed = Math.max(...windSpeeds);
          setWindSpeedInput(maxSpeed.toString());
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleClear = () => {
    setLocationInput('');
    setWindSpeedInput('');
    setMaxWindSpeed(null);
  };

  const getWeatherForecast = async (city) => {
    try {
      const response = await fetch(
        `${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&cnt=5`
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
        placeholder="Enter wind speed value"
        value={windSpeedInput}
        onChange={handleWindSpeedChange}
      />

      <button onClick={calculateMaxWindSpeed}>Calculate Max Wind Speed</button>
      <button onClick={handleAutoFill}>Auto Fill Max Wind Speed</button>
      <button onClick={handleClear}>Clear</button>

      {maxWindSpeed && (
        <div>
          <p>Max Wind Speed (Observed): {maxWindSpeed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default MaxWindSpeedCalculator;
