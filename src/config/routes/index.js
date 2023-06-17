import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './pubicRoutes';
import MainLayout from '../layout/mainLayouts/mainLayout/MainLayout';
import { DashboardPrivateRoutes } from './privateRoutes';
import AuthenticateLayout1 from '../layout/authenticateLayout/AuthenticateLayout1';
import { observer } from 'mobx-react-lite';
import { mainPublicRoutes } from './mainRoutes/mainRoutes/mainRoutes';
const DashboardLayout = lazy(() => import('../layout/dashboardLayout/DashboardLayout'));

const RoutesIndex = observer(() => {

  // here set the public logo
  return (
    <Routes>
      {/* Main Layout Routes */}
      <Route path="/" element={<MainLayout />}>
        {mainPublicRoutes.map((item, index) => (
          <Route element={item.element} path={item.path} key={index} />
        ))}
      </Route>

      <Route path="/auth" element={<AuthenticateLayout1 />}>
        {publicRoutes.map((item, index) => (
          <Route element={item.element} path={item.path} key={index} />
        ))}
      </Route>

      <Route path="/" element={<DashboardLayout />}>
        {DashboardPrivateRoutes.map((item, index) => (
          <Route element={item.element} path={item.path} key={index} />
        ))}
      </Route>
    </Routes>
  );
});

export default RoutesIndex;
