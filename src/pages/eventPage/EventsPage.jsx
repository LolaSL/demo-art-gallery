import React, { useState, useEffect, Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import EventCard from '../../components/events/EventCard';
import { mockData } from '../../mockData/datasource';
import { Link } from 'react-router-dom';
import './EventsPage.scss';


const getEventsData = async (callback) => {
    const { eventsCollection } = mockData();
    const currentLanguage = localStorage.getItem('i18nextLng');
    const events = await eventsCollection.getEvents(currentLanguage);
    callback(events);
}

function EventsPage() {
    const [t, i18n] = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    const [events, setEvents] = useState([]);




    useEffect(() => {
        setIsLoading(true);
        getEventsData((data) => {
            setEvents(data);
            setIsLoading(false);

        })
    }, [i18n.language])


    return isLoading ? (< div className=" loader d-flex align-items-center py-2">
        <strong>{t("loader.loader")}</strong>
        <div className="spinner-border ml-auto text-success" role="status" aria-hidden="true"></div>
    </div>) :
        events.length ?
            (
                <Fragment>
                    <div className="container my-4">
                        <h1 className="event-title pt-4" >{t("pages.event.title")}</h1>
                    </div>
                    {events.map((event, id) => {
                        return <EventCard {...event} key={id} />
                    })}
                    <div className="text-center">
                        <Link to="/booking">
                            <Button type="button" className="btn btn-secondary rounded mx-auto mb-4">
                                {t("pages.event.cta.book")}
                            </Button>
                        </Link>
                    </div>

                </Fragment>
            ) : (<div>{t("loader.notification2")}</div>)
};

export default EventsPage;