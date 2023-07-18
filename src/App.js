import React from 'react';
import MaxWindSpeedCalculator from './component/MaxWindSpeedCalculator';
import MaxTemperature from './component/MaxTemperature';
import MaxIrradianceCalculator from './component/MaxIrradiance';
import WindDataChart from './component/WindDataChart';

const App = () => {
  return (
    <div>
      
      <h4>Wind Speed</h4>
      <MaxWindSpeedCalculator/>
      <WindDataChart/>
      <h4>Temperature</h4>
      <MaxTemperature/>
      <h4>Irradiance</h4>
      <MaxIrradianceCalculator/>
    </div>
  );
};

export default App;