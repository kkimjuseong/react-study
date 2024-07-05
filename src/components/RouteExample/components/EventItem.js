import React from "react";
import styles from './EventItem.module.scss';
import {Link, useNavigate, useParams} from "react-router-dom";

const EventItem = ({ event }) => {

    const {
        title,
        desc: description,
        'img-url': image,
        'start-date': date
    } = event;

    const { eventId : id} = useParams()
    const navigate = useNavigate();

    const deleteHandler = async (e) => {
        e.preventDefault();

        const confirmDelete = window.confirm('정말로 이 이벤트를 삭제하시겠습니까?');
        if (!confirmDelete) {
            return;
        }

        const response = await fetch(`http://localhost:8282/events/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id})
        });

        if (response.ok) {
            navigate('/events');
        } else {
            alert('이벤트 삭제에 실패했습니다.');
        }
    }

    return (
        <article className={styles.event}>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <time>{date}</time>
            <p>{description}</p>
            <menu className={styles.actions}>
                <Link to="edit">Edit</Link>
                <button onClick={deleteHandler}>Delete</button>
            </menu>
        </article>
    );
};

export default EventItem;