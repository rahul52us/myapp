import React, { lazy } from 'react';
import { teacher } from './constantRoutes';
const TeacherIndex = lazy(() => import('../../../../views/dashboard/pages/users/teacher/TeacherIndex'));
const CreateTeacher = lazy(() => import('../../../../views/dashboard/pages/users/teacher/component/CreateTeacher'))
const EditTeacher = lazy(() => import('../../../../views/dashboard/pages/users/teacher/component/EditTeacher'))


export const teacherRoutes = [
  {
    element: <TeacherIndex />,
    path: teacher.LIST,
    publicRoute: false,
  },
  {
    element: <CreateTeacher />,
    path: teacher.CREATE,
    publicRoute: false,
  },
  {
    element: <EditTeacher />,
    path: teacher.EDIT,
    publicRoute: false,
  },
];
