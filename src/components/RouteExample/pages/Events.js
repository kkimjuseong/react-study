import React from 'react';
import {Link} from 'react-router-dom';


const DUMMY_EVENTS = [
    {
        id: '1',
        title: '여름맞이 이벤트',
        image: 'https://m.puroluna.com/file_data/iffl8888/2019/06/18/e6a78ac2fbfa26acf240feb86380a47f.jpg',
        date: '2024-07-20',
        description: '여름맞이 이벤트입니다. 재밌겠지?'
    },
    {
        id: '2',
        title: '건강관리 이벤트',
        image: 'https://www.nhis.or.kr/static/alim/paper/oldpaper/202109/assets/images/sub/event01_mo.jpg',
        date: '2024-07-15',
        description: '건강 이벤트입니다. 건강하겠지?'
    },
];

const Events = () => {
    return (
        <>
            <h1>Events Page</h1>
            <ul>
                {
                    DUMMY_EVENTS.map(event => (
                        <li key={event.id}>
                            <Link to={event.id}>{event.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Events