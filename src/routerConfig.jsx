import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Add from './pages/add/Add';
import Layout from './layout/Layout';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'add',
          element: <Add />
        }
      ]
    }
  ]);

  export default router;