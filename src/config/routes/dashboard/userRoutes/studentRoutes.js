import React, { lazy } from 'react';
import { student } from './constantRoutes';
const EditStudent = lazy(() =>
  import('../../../../views/dashboard/pages/users/student/component/EditStudent'),
);
const StudentIndex = lazy(() => import('../../../../views/dashboard/pages/users/student/StudentIndex'));
const CreateStudent = lazy(() =>
  import('../../../../views/dashboard/pages/users/student/component/CreateStudent'),
);

export const studentRoutes = [
  {
    element: <StudentIndex />,
    path: student.LIST,
    publicRoute: false,
  },
  {
    element: <CreateStudent />,
    path: student.CREATE,
    publicRoute: false,
  },
  {
    element: <EditStudent />,
    path: student.EDIT,
    publicRoute: false,
  },
];
