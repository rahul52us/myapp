import React, { useState } from 'react';
import {
  FormHelperText,
  TextField,
  InputAdornment,
  Checkbox,
  Switch,
  FormControlLabel,
} from '@mui/material';
import { Icon, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import PropTypes from 'prop-types';

const CustomInput = ({
  type,
  label,
  helpText,
  variant,
  value,
  onChange,
  name,
  error,
  showerror,
  icon,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const renderInput = () => {
    switch (type) {
      case 'checkbox':
        return (
          <>
            <FormControlLabel
              control={<Checkbox checked={value} onChange={onChange} name={name} {...rest} />}
              label={label}
            />
          </>
        );
      case 'switch':
        return (
          <FormControlLabel
            control={<Switch checked={value} onChange={onChange} name={name} {...rest} />}
            label={label}
          />
        );
      case 'number':
        return (
          <>
           <TextField
              label={label}
              variant={variant}
              name={name}
              type={type}
              value={value}
              onChange={onChange}
              {...rest}
              sx={{ width: '100%' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon sx={{ marginRight: '5px' }}>{icon}</Icon>
                  </InputAdornment>
                ),
              }}
            />
          </>
        );
      case 'password':
        return (
          <>
            <TextField
              label={label}
              variant={variant}
              name={name}
              type={showPassword ? 'text' : 'password'}
              value={value}
              onChange={onChange}
              {...rest}
              sx={{ width: '100%' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon sx={{ marginRight: '5px' }}>{icon}</Icon>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword}>
                      {showPassword ? <VisibilityOff fontSize='small'/> : <Visibility fontSize='small'/>}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </>
        );
      default:
        return (
          <>
            <TextField
              label={label}
              variant={variant}
              name={name}
              type={type}
              value={value}
              onChange={onChange}
              {...rest}
              sx={{ width: '100%' }}
              InputProps={ icon && {
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon sx={{ marginRight: '5px' }}>{icon}</Icon>
                  </InputAdornment>
                ),
              }}
            />
          </>
        );
    }
  };

  return (
    <div>
      {renderInput()}
      {helpText && <FormHelperText>{helpText}</FormHelperText>}
      {showerror && error && <FormHelperText sx={{ color: 'red' }}>{error}</FormHelperText>}
    </div>
  );
};

CustomInput.defaultProps = {
  variant: 'outlined',
  type: 'text',
  helpText: '',
  showerror: true,
};

CustomInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  helpText: PropTypes.string,
  variant: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.any,
  showerror: PropTypes.bool,
  icon: PropTypes.object,
};

export default CustomInput;
