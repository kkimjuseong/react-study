import React from 'react';
import {useLoaderData, useRouteLoaderData} from 'react-router-dom';
import EventItem from "../components/EventItem";

const EventDetail = () => {

    // 사용 범위가 본인 컴포넌트와 그 하위 컴포넌트(children 은 제외)
    // const ev = useLoaderData();  // 자신의 loader 를 불러옴

    const ev = useRouteLoaderData('event-detail');  // 부모의 loader 를 불러오는 훅훅훅훅

    return <EventItem event={ev}/>
};

export default EventDetail;


export const loader = async ({params}) => {

    const { eventId: id } = params;

// use 로 시작하는 함수인 리액트 훅은 컴포넌트 내부에서만 사용가능하다.
//     const {eventId: id} = useParams();
//     const [ev, setEv] = useState({});


    const response = await fetch(`http://localhost:8282/events/${id}`);

    return await response.json()
}