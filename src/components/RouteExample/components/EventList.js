import React from 'react'
import styles from './EventList.module.scss';
import {Link, useLoaderData} from "react-router-dom";

const EventList = ({ eventList }) => {

    // loader data 는 loader 를 선언하는 페이지 밑에잇는 하위 컴포넌트 어디에서든 사용이 가능하다
    // const eventList = useLoaderData(); pops 를 사용안하고 처럼 불러 올 수 있다.


    const data = useLoaderData();

    const {events, list, item, content} = styles;

    return (
        <div className={events}>
            <h1>All Events</h1>
            <ul className={list}>
                {
                    eventList.map(ev => (
                        <li key={ev.id} className={item}>
                            <Link to={ev.id}>
                                <img src={ev['img-url']} alt={ev.title} />
                                <div className={content}>
                                    <h2>{ev.title}</h2>
                                    <time>{ev.startDate}</time>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default EventList