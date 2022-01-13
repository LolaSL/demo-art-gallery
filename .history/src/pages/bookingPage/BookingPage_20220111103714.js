import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Booking } from '../../components/bookings/Booking';
import { mockData } from '../../mockData/datasource';
import Art from '../../assets/Art.mp4';


const getBookingInfo = async (callback) => {
    const { bookingsCollection } = mockData();
    const currentLanguage = localStorage.getItem('i18nextLng');
    const booking = await bookingsCollection.getBooking(currentLanguage);
    callback(booking);
}

export function BookingPage({ videoTitle }) {
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

    return isLoading ? (< div className=" loader d-flex align-items-center">
        <strong>{t("loader.loader")}</strong>
        <div className="spinner-border ml-auto text-success" role="status" aria-hidden="true"></div>
    </div>) :
        <div className="booking-container px-4 mb-4">
            <div className="full-screen-video-container">
                <video autoPlay loop muted
                    title={videoTitle}>
                    <source src={Art} type="video/mp4" />
                </video>
            </div>
            <div>
                <h1 className="fs-2 pt-4"> {t("pages.booking.title")}</h1>
            </div>
            <Booking {...booking} />
        </div>
};
