import React from 'react';
import Home from './components/RouteExample/pages/Home';
import Products from './components/RouteExample/pages/Products';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RouteExample/layout/RootLayout';

// 라우터 설정
const router = createBrowserRouter([

    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/products', element: <Products /> }
        ]
    },

]);

const App = () => {

    return (
        <RouterProvider router={router} />
    );
};

export default App;