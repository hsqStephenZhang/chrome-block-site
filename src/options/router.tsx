import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from './layouts/SidebarLayout';

import SuspenseLoader from './components/SuspenseLoader';
import React from 'react';

const Loader = (Component: any) => (props: any) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Pages

const Overview = Loader(lazy(() => import('./content/overview')));

const WordsBlocker = Loader(lazy(() => import('./content/applications/WordsBlocker')));

const CategoryBlocker = Loader(
  lazy(() => import('./content/applications/CategoryBlocker'))
);
const UserProfile = Loader(
  lazy(() => import('./content/applications/Users/profile'))
);
const UserSettings = Loader(
  lazy(() => import('./content/applications/Users/settings'))
);

// Other

const Status404 = Loader(
  lazy(() => import('./content/Status/Status404'))
);
const StatusComingSoon = Loader(
  lazy(() => import('./content/Status/ComingSoon'))
);
const StatusMaintenance = Loader(
  lazy(() => import('./content/Status/Maintenance'))
);

const About = Loader(
  lazy(() => import('./content/About'))
);

const routes: RouteObject[] = [
  {
    path: '',
    element: <SidebarLayout />,
    children: [
      {
        path: '/',
        element: <Overview />
      },
      {
        path: 'overview',
        element: <Navigate to="/" replace />
      },
      {
        path: 'wordsblocker',
        element: <WordsBlocker />
      },
      {
        path: 'categoriesblocker',
        element: <CategoryBlocker />
      },
      {
        path: 'status',
        children: [
          {
            path: 'maintenance',
            element: <StatusMaintenance />
          },
          {
            path: 'coming-soon',
            element: <StatusComingSoon />
          }
        ]
      },
      {
        path: 'profile',
        element: <UserProfile />
      },
      {
        path: 'settings',
        element: <UserSettings />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
];

export default routes;
