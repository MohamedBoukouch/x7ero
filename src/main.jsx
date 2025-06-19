import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Detail from './pages/Detail';
import AllGames from './pages/AllGames';
import PrivacyPolicy from './components/Privacy_policy';
import Blogs from './pages/Blogs';
import Article from './components/Article';
import NotFound from './pages/NotFound';
import { Analytics } from '@vercel/analytics/react';
import './index.css';


const router = createBrowserRouter([
  {
    path: '/all-games/:type?', // The ? makes type parameter optional
    element: <AllGames />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
  {
    path: 'blogs',
    element: <Blogs />,
  },
  {
    path: 'blogs/article/:id',
    element: <Article />,
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