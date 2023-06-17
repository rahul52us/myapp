import React, { lazy } from 'react';
import { dashboard } from './indexRoutes';
const DashTestimonialIndex = lazy(() =>
  import('../../../views/dashboard/pages/testimonial/DashTestimonial'),
);

export const testimonialRoutes = [
  {
    element: <DashTestimonialIndex />,
    path: dashboard.Testimonial,
    publicRoute: false,
  }
];
