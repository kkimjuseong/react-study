import React from 'react';
import {useLoaderData, useParams} from "react-router-dom";
import EventsNavigation from "../layout/EventsNavigation";

const EventDetail = () => {

    const {eventId : id} = useParams()

    const data = useLoaderData();
    console.log("loader data", data);

    return (
        <>
            <h1>EventDetail Page</h1>
            <p>Event ID: {id}</p>
        </>
    );
};

export default EventDetail;