import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { GlobalLayout } from '../layout/global-layout';
import { LandingPageLayout } from '../layout/lading-page-layout';
import { Home } from '../pages/home/home';

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
            element: <Home />,
          },
        ],
      },
    ],
  },
]);
export function Router() {
  return <RouterProvider router={routes} />;
}
