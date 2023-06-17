import React, { lazy } from 'react';

const Login = lazy(() => import('../../views/authenticate/Login/Login'));
const Register = lazy(() => import('../../views/authenticate/Register/Register'));
const ForgotPassword = lazy(() => import('../../views/authenticate/ForgotPassword/ForgotPassword'))
const PageNotFound = lazy(() => import('../../views/mainPagesLayout/mainPagesLayout1/PageNotFound/PageNotFound'));
import { authRoute } from './authenticate_constant_route';

export const publicRoutes = [
  {
    element: <Login />,
    path: authRoute.LOGIN,
    publicRoute: true,
  },
  {
    element: <Register />,
    path: authRoute.REGISTER,
    publicRoute: true,
  },
  {
    element: <ForgotPassword />,
    path: authRoute.FORGOT_PASSWORD,
    publicRoutes: true
  },
  {
    element: <PageNotFound />,
    path: '*',
    publicRoutes: true,
  },
];
