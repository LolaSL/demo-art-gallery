
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
        <div>
            <div className="container text-center">
                <h3 className="booking-info"> {info}
                    <Link to="/"> {link}</Link></h3>
                <Link to="/events">
                    <div className="text-center">
                        <Button type="button"
                            id="booking-btn"
                            className="btn btn-secondary rounded btn-sm">
                            {t("pages.booking.bookingButton")}
                        </Button></div>
                </Link>
            </div>
            <div className=" icon-container text-center">
                <p><strong> {paymentStatus}</strong></p>
                <p><Icon.Alarm /> <strong>:  {status}</strong></p>
                <p><Icon.Calendar /><strong>:  {bookingStatus}</strong></p>
                <p><Icon.Telephone /><strong>:  {phoneNumber}</strong></p>
                <p><Icon.Envelope /><strong>:  {email}</strong></p>
            </div>
            <div className=" address-container text-center">
                <p><strong> {address}</strong></p>
                <p><strong> {appartment} </strong></p>
                <p><strong> {street}</strong></p>
            </div>
            <div>
                <h2 className="trailer-title text-center"> {t("pages.booking.header")}</h2>
            </div>
            <div className="video-container text-center">
                <div className="video d-flex justify-content-center" >
                    <video
                        controls title={videoTitle}
                        width="620"
                        height="420"
                        frameBorder="1"
                        allowFullScreen>
                        <source src={Art} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
}