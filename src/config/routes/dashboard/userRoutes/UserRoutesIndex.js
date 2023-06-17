import React, { lazy } from 'react';
import { staffRoutes } from './staffRoutes';
import { studentRoutes } from './studentRoutes';
import { teacherRoutes } from './teacherRoutes';
import { dashboard } from '../indexRoutes';
const UsersIndex = lazy(() => import('../../../../views/dashboard/pages/users/UsersIndex'));

export const UserRoutes = [
  {
    element: <UsersIndex />,
    path: dashboard.Users,
    publicRoute: false,
  },
  ...staffRoutes,
  ...studentRoutes,
  ...teacherRoutes,
];
