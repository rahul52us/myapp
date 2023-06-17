import React, { lazy } from 'react';
import Home from '../../../views/mainPagesLayout/mainPagesLayout1/pages/Home/Home';
const About = lazy(() =>
  import('../../../views/mainPagesLayout/mainPagesLayout1/pages/about/About.jsx'),
);
const Contact = lazy(() =>
  import('../../../views/mainPagesLayout/mainPagesLayout1/pages/contact/Contact'),
);
const Teacher = lazy(() =>
  import('../../../views/mainPagesLayout/mainPagesLayout1/pages/teacher/Teacher'),
);
const TeacherDetails = lazy(() =>
  import('../../../views/mainPagesLayout/mainPagesLayout1/pages/teacher/TeacherDetails'),
);

const Gallery = lazy(() => import('../../../views/mainPagesLayout/mainPagesLayout1/pages/gallery/Gallery'))

export const mainPublicRoutes = [
  {
    element: <Home />,
    path: '/',
    publicRoute: true,
  },
  {
    element: <About />,
    path: '/about',
    publicRoute: true,
  },
  {
    element: <Teacher />,
    path: '/teachers',
    publicRoute: true,
  },
  {
    element: <TeacherDetails />,
    path: '/teachers/profile-details/:id',
    publicRoute: true,
  },
  {
    element: <Contact />,
    path: '/contact',
    publicRoute: true,
  },
  {
    element: <Gallery />,
    path: '/gallery',
    publicRoute: true,
  },
];
