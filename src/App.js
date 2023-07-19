import React from 'react';

import MaxTemperature from './component/MaxTemperature';
import MaxIrradianceCalculator from './component/MaxIrradiance';
import PredictWindSpeed from './component/WindSpeedForecast';

import MaximumWindSpeed from './component/MaxWindSpeedCalculator';

const App = () => {
  return (
    <div>
      
      <h4>Wind Speed</h4>
      <MaximumWindSpeed/>
      <PredictWindSpeed/>
      <h4>Temperature</h4>
      <MaxTemperature/>
      <h4>Irradiance</h4>
      <MaxIrradianceCalculator/>
    </div>
  );
};

export default App;