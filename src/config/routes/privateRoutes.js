import React, { lazy } from 'react';
import { testimonialRoutes } from './dashboard/testimonialRoutes';
import { UserRoutes } from './dashboard/userRoutes/UserRoutesIndex';
import { blogRoutes } from './dashboard/blogRoutes';
const Dashboard = lazy(() => import('../../views/dashboard'));
const UserProfile = lazy(() => import('../../views/userProfile/UserProfile'));
const PageNotFound = lazy(() => import('../../views/mainPagesLayout/mainPagesLayout1/PageNotFound/PageNotFound'));

export const privateRoutes = [
  {
    element: <UserProfile />,
    path: 'profile',
    publicRoute: false,
  },
  // Dashboard
  {
    element: <PageNotFound />,
    path: '*',
    publicRoute: false,
  },
];

export const DashboardPrivateRoutes = [
  {
    element: <Dashboard />,
    path: 'dashboard',
    publicRoute: false,
  },
  ...UserRoutes,
  ...testimonialRoutes,
  ...blogRoutes,
  {
    element: <UserProfile />,
    path: 'profile',
    publicRoute: false,
  },
  // Dashboard
  {
    element: <PageNotFound />,
    path: '*',
    publicRoute: false,
  },
];
