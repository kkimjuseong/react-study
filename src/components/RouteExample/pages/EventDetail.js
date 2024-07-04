import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import EventItem from "../components/EventItem";

const EventDetail = () => {

    const { eventId: id } = useParams();
    const [ev, setEv] = useState({});

    useEffect(() => {

        (async () => {
            const response = await fetch(`http://localhost:8282/events/${id}`);
            const json = await response.json();
            console.log('json: ', json);
            setEv(json);
        })();

    }, []);

    return <EventItem event={ev} />
};

export default EventDetail;
