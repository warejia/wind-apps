import React, { useState } from 'react';

const weatherApi = {
  key: '9f23b56e8dcad8299bf4e5a2a3fc932b',
  baseUrl: 'https://api.openweathermap.org/data/2.5/weather'
};

const PredictWindSpeed = () => {
  const [locationInput, setLocationInput] = useState('');
  const [windSpeedInput, setWindSpeedInput] = useState('');
  const [predictedWindSpeed, setPredictedWindSpeed] = useState(null);

  const handleLocationChange = (event) => {
    setLocationInput(event.target.value);
  };

  const handleWindSpeedChange = (event) => {
    setWindSpeedInput(event.target.value);
  };

  const predictWindSpeed = () => {
    const windSpeed = parseFloat(windSpeedInput);
    if (!isNaN(windSpeed)) {
      setPredictedWindSpeed(windSpeed);
      setWindSpeedInput(''); // Clear the input field
    }
  };

  const handleAutoFill = () => {
    if (locationInput) {
      getWeatherReport(locationInput)
        .then((data) => {
          const windSpeed = data.wind.speed;
          setWindSpeedInput(windSpeed.toString());
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleClear = () => {
    setLocationInput('');
    setWindSpeedInput('');
    setPredictedWindSpeed(null);
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
        placeholder="Enter wind speed value"
        value={windSpeedInput}
        onChange={handleWindSpeedChange}
      />

      <button onClick={predictWindSpeed}>Predict Wind Speed</button>
      <button onClick={handleAutoFill}>Auto Fill Wind Speed</button>
      <button onClick={handleClear}>Clear</button>

      {predictedWindSpeed && (
        <div>
          <p>Predicted Wind Speed: {predictedWindSpeed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default PredictWindSpeed;
