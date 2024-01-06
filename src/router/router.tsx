import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { GlobalLayout } from '../layout/global-layout';
import { LandingPageLayout } from '../layout/lading-page-layout';
import { HomePage } from '../pages/home/home-page';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      {
        path: '/',
        element: <LandingPageLayout />,
        children: [
          {
            path: '/',
            element: <HomePage />,
          },
        ],
      },
    ],
  },
]);
export function Router() {
  return <RouterProvider router={routes} />;
}
