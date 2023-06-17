import { Dashboard, Home, Article, Person, School, Comment} from '@mui/icons-material';
import React from 'react';
import { blogRoute } from '../../../../routes/dashboard/constantRoutes';
import { staff, student, teacher } from '../../../../routes/dashboard/userRoutes/constantRoutes';
import { dashboard } from '../../../../routes/dashboard/indexRoutes';

export const SidebarRoutes = [
  {
    key: 'home',
    title: 'Home',
    pathname: '/',
    icon: <Home />,
    parent:'/'
  },
  {
    key: 'dashboard',
    title: 'Dashboard',
    pathname: dashboard.Home,
    icon: <Dashboard />,
    parent:dashboard.Home
  },
  { key: 'apps', title: 'apps', heading: true },
  {
    key: 'blog',
    title: 'Blog',
    pathname: blogRoute.HOME,
    icon: <Article />,
    parent:dashboard.Blog,
    children: [
      {
        key: 'index',
        title: 'Index',
        pathname: blogRoute.HOME,
        parent:dashboard.Blog
      },
      {
        key: 'create',
        title: 'Create',
        pathname: blogRoute.CREATE,
        parent:dashboard.Blog
      },
    ],
  },
  {
    key: 'testimonial',
    title: 'Testimonial',
    pathname: dashboard.Testimonial,
    icon: <Comment />,
    parent:dashboard.Testimonial
  },
  { key: 'users', title: 'users', heading: true },
  {
    key: 'users',
    title: 'Users',
    pathname: dashboard.Users,
    icon: <Person />,
    parent:dashboard.Users
  },
  {
    key: 'student',
    title: 'Student',
    pathname: student.LIST,
    icon: <School />,
    parent:student.LIST,
    children: [
      {
        key: 'student',
        title: 'Index',
        pathname: student.LIST,
        parent:student.LIST
      },
      {
        key: 'create',
        title: 'Create',
        pathname: student.CREATE,
        parent:student.LIST
      },
    ],
  },
  {
    key: 'teacher',
    title: 'Teacher',
    pathname: teacher.LIST,
    parent:teacher.LIST,
    icon: <Person />,
    children: [
      {
        key: 'teacher',
        title: 'Index',
        pathname: teacher.LIST,
        parent:teacher.LIST,
      },
      {
        key: 'create',
        title: 'Create',
        pathname: teacher.CREATE,
        parent:teacher.LIST,
      }
    ],
  },
  {
    key: 'staff',
    title: 'Staff',
    pathname: staff.LIST,
    parent:staff.LIST,
    icon: <Person />,
    children: [
      {
        key: 'staff',
        title: 'Index',
        pathname: staff.LIST,
        parent:staff.LIST,
      },
      {
        key: 'create',
        title: 'Create',
        pathname: staff.CREATE,
        parent:staff.LIST,
      }
    ],
  },
];
