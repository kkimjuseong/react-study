import React from 'react';
import {useLoaderData} from 'react-router-dom';
import EventItem from "../components/EventItem";

const EventDetail = () => {

    const ev = useLoaderData();

    return <EventItem event={ev}/>
};

export default EventDetail;


export const loader = async (params) => {

    const { eventId: id } = params;

// use 로 시작하는 함수인 리액트 훅은 컴포넌트 내부에서만 사용가능하다.
//     const {eventId: id} = useParams();
//     const [ev, setEv] = useState({});


    const response = await fetch(`http://localhost:8282/events/${id}`);

    return await response.json()
}