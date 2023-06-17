import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';

const ColorCustomizer = ({ onChange }) => {
  const [primaryColor, setPrimaryColor] = useState('#000000');
  const [secondaryColor, setSecondaryColor] = useState('#000000');

  const handlePrimaryColorChange = (color) => {
    setPrimaryColor(color.hex);
    onChange('primary', color.hex);
  };

  const handleSecondaryColorChange = (color) => {
    setSecondaryColor(color.hex);
    onChange('secondary', color.hex);
  };

  return (
    <div>
      <h2>Color Customizer</h2>
      <div>
        <h3>Primary Color</h3>
        <ChromePicker color={primaryColor} onChange={handlePrimaryColorChange} />
      </div>
      <div>
        <h3>Secondary Color</h3>
        <ChromePicker color={secondaryColor} onChange={handleSecondaryColorChange} />
      </div>
    </div>
  );
};

ColorCustomizer.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ColorCustomizer;
