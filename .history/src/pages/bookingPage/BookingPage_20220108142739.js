import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Booking } from '../components/Booking';
import { mockData } from '../mockData/datasource';

const getBookingInfo = async (callback) => {
    const { bookingsCollection } = mockData();
    const currentLanguage = localStorage.getItem('i18nextLng');
    const booking = await bookingsCollection.getBooking(currentLanguage);
    callback(booking);
}

export function BookingPage() {
    const [t, i18n] = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    const [booking, setBooking] = useState({});

    useEffect(() => {
        setIsLoading(true);
        getBookingInfo((data) => {
            setBooking(data);
            setIsLoading(false);
        })
    }, [i18n.language])

    return isLoading ? (<div className="loader">{t("loader.loader")}</div>) :
        <main className="main">
            <div>
                <h1 className="title"> {t("pages.booking.title")}</h1>
            </div>
            <Booking {...booking} />
        </main>
};
