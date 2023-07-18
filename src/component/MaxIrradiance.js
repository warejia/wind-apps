import React, { useState } from 'react';

const MaxIrradianceCalculator = () => {
  const [irradianceInput, setIrradianceInput] = useState('');
  const [maxIrradiance, setMaxIrradiance] = useState(null);
  const irradianceData = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 94, 193, 268, 294, 274, 207, 110, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 67, 129, 118, 104, 167, 181, 101, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 21, 66, 110, 66, 99, 107, 56, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 41, 122, 121, 139, 108, 56, 29, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 56, 174, 180, 228, 221, 142, 91, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 77, 135, 144, 140, 121, 83, 71, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 88, 119, 112, 122, 112, 87, 38, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 69, 147, 198, 196, 202, 148, 86, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 41, 98, 122, 175, 192, 146, 96, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 49, 131, 178, 221, 188, 173, 90, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 79, 137, 186, 247, 222, 208, 134, 33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 101, 222, 302, 307, 307, 245, 145, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ];

  const handleIrradianceChange = (event) => {
    setIrradianceInput(event.target.value);
  };

  const calculateMaxIrradiance = () => {
    const irradiance = parseFloat(irradianceInput);
    if (!isNaN(irradiance)) {
      const updatedIrradianceData = [
        ...irradianceData,
        irradiance
      ];
      const maxIrradianceValue = Math.max(...updatedIrradianceData);
      setMaxIrradiance(maxIrradianceValue);
      setIrradianceInput(''); // Clear the input field
    }
  };

  const handleAutoFill = () => {
    const maxIrradianceValue = Math.max(...irradianceData);
    setIrradianceInput(maxIrradianceValue.toString());
  };

  const handleClear = () => {
    setIrradianceInput('');
    setMaxIrradiance(null);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter irradiance value"
        value={irradianceInput}
        onChange={handleIrradianceChange}
      />
      
      <button onClick={handleAutoFill}>Auto Fill Max Irradiance</button>
      <button onClick={handleClear}>Clear</button>
      
    </div>
  );
};

export default MaxIrradianceCalculator;