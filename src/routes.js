import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import BasicLayout from 'layout/BasicLayout';

const Login = lazy(() => import(/* webpackChunkName: "Login" */ './pages/Session/Login'));

const Logout = lazy(() => import(/* webpackChunkName: "Logout" */ './pages/Session/Logout'));

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <BasicLayout />,
      children: [
        { path: '', element: <Login /> },
        { path: 'logout', element: <Logout /> },
      ],
    },
    { path: '*', element: <Navigate to="/" replace /> },
  ]);
}
