import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { EventCard } from '../../components/events/EventCard';
import { mockData } from '../../mockData/datasource';
import { useHistory } from 'react-router';
import './EventPage.scss';


const getEventsData = async (callback) => {
    const { eventsCollection } = mockData();
    const currentLanguage = localStorage.getItem('i18nextLng');
    const events = await eventsCollection.getEvents(currentLanguage);
    callback(events);
}

export function EventsPage() {
    const [t, i18n] = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    const [events, setEvents] = useState([]);
    const history = useHistory();



    useEffect(() => {
        setIsLoading(true);
        getEventsData((data) => {
            setEvents(data);
            setIsLoading(false);

        })
    }, [i18n.language])


    return isLoading ? (<div className="loader">{t("loader.loader")}</div>) :
        events.length ?
            (
                <>
                    <div className="container  my-4">
                        <h1 className="event-title pt-4" >{t("pages.event.title")}</h1>
                    </div>
                    {events.map((event, id) => {
                        return <EventCard {...event} key={id} />
                    })}
                    <div className="text-center">
                        <Button type="button" onClick={() => history.push('/booking')} className="text-white btn btn-secondaty rounded mx-auto mb-4">
                            {t("pages.event.cta.book")}
                        </Button>
                    </div>

                </>
            ) : (<div>{t("loader.notification2")}</div>)
};
