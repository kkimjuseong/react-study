import React from 'react';
import {Link, useLoaderData} from 'react-router-dom';
import EventList from "../components/EventList";
import EventsNavigation from "../layout/EventsNavigation";


const Events = () => {

    // loader 가 리턴한 데이터 받아오기
    const eventList = useLoaderData();
    // console.log(aaa);

    return (
        <>
            <h1>Events Page</h1>
            <EventList eventList={eventList} />
        </>
    );
};

export default Events;

// loader 를 app.js 로부터 아웃소싱
export const loader = async () => {

    // 이 페이지가 열릴때 자동으로 트리거가 되어 호출되는 함수
    // 이 함수에는 페이지가 열리자마자 해야할 일을 적을 수 있다.

    const response = await fetch('http://localhost:8282/events');
    // const jsonData = await response.json();

    // loader 가 리턴한 데이터는 loader 를 선언한 컴포넌트와 그 하위 컴포넌트에서
    // 언제든 불러서 사용할 수 있다
    // console.log(jsonData)

    // loader 에서 fetch 의 결과를 바로 리턴하면 알아서 json 을 추출해준다.
    return response;
};