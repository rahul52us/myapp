import React, { lazy } from 'react';
import { blogRoute } from './constantRoutes';
const DashBlogIndex = lazy(() =>
  import('../../../views/dashboard/pages/blog/Index'),
);
const DashBlogCreateIndex = lazy(() => import('../../../views/dashboard/pages/blog/component/CreateBlog'))

export const blogRoutes = [
  {
    element: <DashBlogIndex />,
    path: blogRoute.HOME,
    publicRoute: false,
  },
  {
    element: <DashBlogCreateIndex />,
    path: blogRoute.CREATE,
    publicRoute: false,
  },
];
