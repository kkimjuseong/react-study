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
