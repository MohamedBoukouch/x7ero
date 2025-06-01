import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Detail from './Detail';
import AllGames from './AllGames';
import './index.css';


const router = createBrowserRouter([
  {
    path: '/all-games',
    element: <AllGames />,
  },
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/game/:id',
    element: <Detail />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);