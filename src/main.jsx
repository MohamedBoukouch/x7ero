import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Detail from './Detail';
import AllGames from './AllGames';
import PrivacyPolicy from './Privacy_policy';
import NotFound from './NotFound';
import { Analytics } from '@vercel/analytics/react';


import './index.css';


const router = createBrowserRouter([
  {
    path: '/all-games',
    element: <AllGames />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/game/:slug',
    element: <Detail />,
  },
  {
    path: '*', // Catch-all for undefined routes
    element: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </React.StrictMode>
);