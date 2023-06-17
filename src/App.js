import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import lightTheme from './theme/lightTheme';
import darkTheme from './theme/darkTheme';
import store from './store/store';
import { observer } from 'mobx-react-lite';
import Notifications from './component/Notification/Notifications';
import CustomLoader from './component/Loader/CustomLoader';
import RoutesIndex from './config/routes/index';
import { DeviceProvider } from './component/CustomHooks/useDevice';
import ErrorBoundary from './config/components/ErrorBoundary';
import { handleErrorMessage } from './views/utils/function';
import ScrollToTopBottom from './component/common/ScrollToTopButton/ScrollToTopButton';

const App = observer(() => {
  const {
    layout: { themeMode },
    WebStore: { getWeb, web },
  } = store;

  useEffect(() => {
    getWeb('knowledforcurious')
      .then(() => {})
      .catch((err) => {
        handleErrorMessage(err)
      });
  }, []);

  console.log(web)

  return localStorage.getItem(process.env.REACT_APP_WEB_INFO_KEY) || 'rahul' === 'rahul' ? (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <ErrorBoundary>
        <Notifications />
        <CssBaseline />
        <DeviceProvider>
          <RoutesIndex />
        </DeviceProvider>
        <ScrollToTopBottom />
      </ErrorBoundary>
    </ThemeProvider>
  ) : (
    <CustomLoader />
  );
});

export default App;
