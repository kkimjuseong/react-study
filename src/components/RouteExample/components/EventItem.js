import React from "react";
import styles from './EventItem.module.scss';
import {Link, useNavigate, useParams, useSubmit} from "react-router-dom";

const EventItem = ({ event }) => {

    // 액션 함수를 트리거 하는 두 번째 방법
    const submit = useSubmit();



    const {
        title,
        desc: description,
        'img-url': image,
        'start-date': date
    } = event;


    const deleteHandler = (e) => {

        // action 을 트리거만 해주면 됨
        submit(null, {method: 'DELETE'});
        /*
            <Form method = 'DELETE' 처럼 동작하게 됨
         */

    }

    return (
        <article className={styles.event}>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <time>{date}</time>
            <p>{description}</p>
            <menu className={styles.actions}>
                <Link to="edit">Edit</Link>
                <button
                    onClick={deleteHandler}
                >
                    Delete</button>
            </menu>
        </article>
    );
};

export default EventItem;