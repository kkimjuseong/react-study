import React from 'react';
import Home from './components/RouteExample/pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RouteExample/layout/RootLayout';
import ErrorPage from './components/RouteExample/pages/ErrorPage';
import Events, {loader} from "./components/RouteExample/pages/Events";
import EventDetail from "./components/RouteExample/pages/EventDetail";
import EventLayout from "./components/RouteExample/layout/EventLayout";
import NewEvent from "./components/RouteExample/pages/NewEvent";


// 라우터 설정
const router = createBrowserRouter([

    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            {
              path: 'events',
              element: <EventLayout />,
              children: [
                  {
                      index: true,
                      element: <Events/>,
                      // 이 페이지가 열릴때 자동으로 트리거가 되어 호출되는 함수
                      // 이 함수에는 페이지가 열리자마자 해야할 일을 적을 수 있다.
                      loader: loader,
                  },
                  {path: ':eventId', element: <EventDetail />},
                  {path : 'new', element: <NewEvent />}
              ]
            },
        ]
    },

]);

const App = () => {

    return (
        <RouterProvider router={router} />
    );
};

export default App;