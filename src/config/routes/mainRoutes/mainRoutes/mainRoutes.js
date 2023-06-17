import React, { lazy } from 'react';
import { ContactRouteIndex, VideoRouteIndex , TestimonialRouteIndex} from './constant';
import Home from '../../../../views/mainPagesLayout/mainPagesLayout/pages/Home/Home';
const YoutubeVideoIndex = lazy(() =>
  import('../../../../views/mainPagesLayout/mainPagesLayout/pages/videoCourses/YoutubeVideo'),
);
const Contact = lazy(() =>
  import('../../../../views/mainPagesLayout/mainPagesLayout/pages/Contact/Contact'),
);
const TestimonialIndex = lazy(() =>
  import('../../../../views/mainPagesLayout/mainPagesLayout/pages/testimonial/Testimonial'),
);

export const mainPublicRoutes = [
  {
    element: <Home />,
    path: '/',
    publicRoute: true,
  },
  {
    element: <YoutubeVideoIndex />,
    path: VideoRouteIndex,
    publicRoute: true,
  },
  {
    element: <Contact />,
    path: ContactRouteIndex,
    publicRoute: true,
  },
  {
    element: <TestimonialIndex />,
    path: TestimonialRouteIndex,
    publicRoute: true,
  },
];
