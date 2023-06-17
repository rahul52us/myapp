import React, { lazy } from 'react';
import { staff } from './constantRoutes';
const StaffIndex = lazy(() => import('../../../../views/dashboard/pages/users/staff/StaffIndex'));
const CreateStaff = lazy(() =>
  import('../../../../views/dashboard/pages/users/staff/component/CreateStaff'),
);
const EditStaff = lazy(() => import('../../../../views/dashboard/pages/users/staff/component/EditStaff'));

export const staffRoutes = [
  {
    element: <StaffIndex />,
    path: staff.LIST,
    publicRoute: false,
  },
  {
    element: <CreateStaff />,
    path: staff.CREATE,
    publicRoute: false,
  },
  {
    element: <EditStaff />,
    path: staff.EDIT,
    publicRoute: false,
  },
];
