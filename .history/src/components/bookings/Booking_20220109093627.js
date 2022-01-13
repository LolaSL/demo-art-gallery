
import React from 'react';
import { useTranslation } from 'react-i18next';
import Art from './Art.mp4';
import * as Icon from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";



export function Booking({
    info,
    link,
    paymentStatus,
    status,
    bookingStatus,
    phoneNumber,
    address,
    appartment,
    street,
    email,
    videoTitle
}) {
    const [t] = useTranslation();

    return (
        <div className="booking-box" >
            <div className="booking text-center pt-2">
                <h3 className="booking-info"> {info}
                    <Link to="/"> {link}</Link></h3>
                <Link to="/events">
                    <div className="text-center pt-2 mb-2">
                        <Button type="button"
                            className="btn btn-secondary rounded btn-md">
                            {t("pages.booking.bookingButton")}
                        </Button></div>
                </Link>
            </div>
            <div className=" icon-container text-center mb-3">
                <section>
                    <p className="fs-4 pt-2"><strong> {paymentStatus}</strong></p>
                    <p className="fs-5 pt-2"><Icon.Alarm /> <strong> :  {status}</strong></p>
                    <p className="fs-5 pt-2"><Icon.Calendar /><strong> :  {bookingStatus}</strong></p>
                    <p className="fs-5 pt-2"><Icon.Telephone /><strong> :  {phoneNumber}</strong></p>
                    <p className="fs-5 pt-2"><Icon.Envelope /><strong> :  {email}</strong></p>
                </section>
            </div>
            <div className=" address-container text-center mb-3">
                <section>
                    <p className="fs-4 pt-2"><strong> {address}</strong></p>
                    <p className="fs-5 pt-2"><strong> {appartment} </strong></p>
                    <p className="fs-5 pt-2"><strong> {street}</strong></p></section>
            </div>
            <div>
                <h2 className="trailer-title text-center py-4 mb-4"> {t("pages.booking.header")}</h2>
            </div>
            <div className="video-container text-center pt-2 mb-4">
                <div className=" embed-responsive embed-responsive-21by9" >
                    <video iframe className="embed-responsive-item"
                        src={Art}
                        autoplay muted
                        type="video/mp4"
                        width="420"
                        height="345"
                        frameBorder="1"
                        controls
                        title={videoTitle}
                        allowFullScreen>
                    </video>
                </div>
            </div>
        </div>
    );
}