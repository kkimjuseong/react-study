import React from "react";
import styles from './EventItem.module.scss';

const EventItem = ({ event }) => {

    const {
        title,
        desc: description,
        'img-url': image,
        'start-date': date
    } = event;

    return (
        <article className={styles.event}>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <time>{date}</time>
            <p>{description}</p>
            <menu className={styles.actions}>
                <a href="#">Edit</a>
                <button>Delete</button>
            </menu>
        </article>
    );
};

export default EventItem;
