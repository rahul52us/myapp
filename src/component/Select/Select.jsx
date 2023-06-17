import React from 'react';
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Icon } from '@mui/material';

const CustomSelect = ({ label, error, helpText, icon, options = [], ...rest }) => {
  const muiTheme = useTheme();

  const customStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: '56px', // Adjust the height as needed
      border: `1px solid ${muiTheme.palette.grey[500]}`, // Use Material-UI's grey color for border
      borderRadius: '4px', // Add border radius
      boxShadow: 'none', // Remove box shadow
      cursor: 'pointer', // Add cursor pointer
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '8px', // Add left padding to make space for the icon
    }),
    singleValue: (provided) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
    }),
    placeholder: (provided) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      paddingRight: '8px', // Add right padding to align the dropdown indicator
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 9999, // Set a high z-index value to ensure the dropdown menu appears on top
    }),
    option: (provided) => ({
      ...provided,
      cursor: 'pointer', // Add cursor pointer to the dropdown menu options
    }),
  };

  return (
    <div>
      <FormControl sx={{ minWidth: '100%' }}>
        <InputLabel id="custom-select-label">{label}</InputLabel>
        <Select
          labelId="custom-select-label"
          id="custom-select"
          styles={customStyles}
          options={options}
          isClearable
          components={{
            ValueContainer: ({ children }) => (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                 <Icon sx={{fontSize:'22px',marginRight:'10px'}}>{icon}</Icon>
                {children}
              </div>
            ),
          }}
          {...rest}
        />
      </FormControl>
      <FormHelperText>{helpText}</FormHelperText>
      {error && <FormHelperText sx={{ color: 'red' }}>{error}</FormHelperText>}
    </div>
  );
};

CustomSelect.defaultProps = {
  options: [],
};

CustomSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  helpText: PropTypes.string,
  error: PropTypes.any,
  icon:PropTypes.object,
  children:PropTypes.node
};

export default CustomSelect;