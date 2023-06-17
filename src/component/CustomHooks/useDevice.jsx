import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery, useTheme } from '@mui/material';

// Create a context for device information
const DeviceContext = createContext();

// Define the array of breakpoint names
const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

// DeviceProvider component
// DeviceProvider component
const DeviceProvider = ({ children }) => {
  const theme = useTheme();
  const deviceInfo = {};

  // Iterate through the breakpoints and check the media queries
  breakpoints.forEach((breakpoint, index) => {
    const isScreen = useMediaQuery(theme.breakpoints.only(breakpoint));
    const isDown = index > 0 && useMediaQuery(theme.breakpoints.down(breakpoints[index - 1]));
    const isUp = index < breakpoints.length - 1 && useMediaQuery(theme.breakpoints.up(breakpoint));
    const isBetween =
      index > 0 &&
      index < breakpoints.length - 1 &&
      useMediaQuery(theme.breakpoints.between(breakpoints[index - 1], breakpoint));

    deviceInfo[`is${breakpoint.charAt(0).toUpperCase()}${breakpoint.slice(1)}Screen`] = isScreen;
    deviceInfo[`is${breakpoint.charAt(0).toUpperCase()}${breakpoint.slice(1)}Down`] = isDown;
    deviceInfo[`is${breakpoint.charAt(0).toUpperCase()}${breakpoint.slice(1)}Up`] = isUp;
    deviceInfo[`is${breakpoint.charAt(0).toUpperCase()}${breakpoint.slice(1)}Between`] = isBetween;
  });

  return <DeviceContext.Provider value={deviceInfo}>{children}</DeviceContext.Provider>;
};


DeviceProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Hook to access device information
const useDeviceInfo = () => useContext(DeviceContext);

export { DeviceProvider, useDeviceInfo };

// const {
//   isXsScreen,
//   isSmScreen,
//   isMdScreen,
//   isLgScreen,
//   isXlScreen,
//   isXsDown,
//   isSmDown,
//   isMdDown,
//   isLgDown,
//   isXlDown,
//   isXsUp,
//   isSmUp,
//   isMdUp,
//   isLgUp,
//   isXlUp,
//   isXsBetween,
//   isSmBetween,
//   isMdBetween,
//   isLgBetween,
//   isXlBetween,
// } = useDeviceInfo();
