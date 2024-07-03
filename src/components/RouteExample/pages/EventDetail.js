import React from 'react';
import {useParams} from "react-router-dom";

const EventDetail = () => {

    const {eventId : id} = useParams()
    return (
        <>
            <h1>EventDetail Page</h1>
            <p>Event ID: {id}</p>
        </>
    );
};

export default EventDetail;