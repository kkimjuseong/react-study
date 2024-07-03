import React from 'react';
import Home from './components/RouteExample/pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RouteExample/layout/RootLayout';
import ErrorPage from './components/RouteExample/pages/ErrorPage';
import Events from "./components/RouteExample/pages/Events";
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
                      loader: async () => {
                          const response = await fetch('http://localhost:8282/events');
                          const jsonData = await response.json();

                          // loader 가 리턴한 데이터는 loader 를 선언한 컴포넌트와 그 하위 컴포넌트에서
                          // 언제든 불러서 사용할 수 있다
                          return jsonData;
                      }
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