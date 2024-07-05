import React, {useEffect, useState} from 'react';
import {Link, useLoaderData, json} from 'react-router-dom';
import EventList from "../components/EventList";
import EventSkeleton from "../components/EventSkeleton";


const Events = () => {

    // loader 가 리턴한 데이터 받아오기
    // const eventList = useLoaderData();
    // console.log(eventList);


    // 서버에서 가져온 이벤트 목록
    const [events, setEvents] = useState([])

    // 서버 로딩 상태 체크
    const [loading, setLoading] = useState(false)


    // 서버로 목록 조회 요청보내기
    const loadEvents = async () => {

        console.log('start loadng.....');
        setLoading(true)

        const response = await fetch('http://localhost:8282/events/page/1?sort=date');
        const events = await response.json();
        setEvents(events);
        setLoading(false)
        console.log('end loading!!')
    }

    // 초기 이벤트 1페이지 목록 가져오기
    useEffect(() => {
        loadEvents()
    }, []);

    return (
        <>
            <EventList eventList={events} />
            {loading && <EventSkeleton/>}
        </>
    );
};

export default Events;






// loader 를 app.js 로부터 아웃소싱
// export const loader = async () => {
//
//
//     // 이 페이지가 열릴때 자동으로 트리거가 되어 호출되는 함수
//     // 이 함수에는 페이지가 열리자마자 해야할 일을 적을 수 있다.
//
//     const response = await fetch('http://localhost:8282/events/page/1?sort=date');
//
//     if (!response.ok) {
//         const errorText = await response.text();
//         // react-router-dom 에서 제공하는 json 을 new Response 자리어 넣으면 JSON.stringify 를 사용 안해도 된다.
//         throw new Response(
//             JSON.stringify({ message: errorText }),
//         {
//             status: response.status,
//         }
//         );
//     }
//     return response;    // ok 일 경우 events[]
//
//     // const jsonData = await response.json();
//
//     // loader 가 리턴한 데이터는 loader 를 선언한 컴포넌트와 그 하위 컴포넌트에서
//     // 언제든 불러서 사용할 수 있다
//     // console.log(jsonData)
//
//     // loader 에서 fetch 의 결과를 바로 리턴하면 알아서 json 을 추출해준다.
// };