
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
            <div className="container text-center pt-2">
                <h3 className="booking-info"> {info}
                    <Link to="/"> {link}</Link></h3>
                <Link to="/events">
                    <div className="text-center pt-2">
                        <Button type="button"
                            className="btn btn-secondary rounded btn-md">
                            {t("pages.booking.bookingButton")}
                        </Button></div>
                </Link>
            </div>
            <div className=" icon-container text-center">
                <section>
                    <p className="fs-4"><strong> {paymentStatus}</strong></p>
                    <p className="fs-5"><Icon.Alarm /> <strong> :  {status}</strong></p>
                    <p className="fs-5"><Icon.Calendar /><strong> :  {bookingStatus}</strong></p>
                    <p className="fs-5"><Icon.Telephone /><strong> :  {phoneNumber}</strong></p>
                    <p className="fs-5"><Icon.Envelope /><strong> :  {email}</strong></p>
                </section>
            </div>
            <div className=" address-container text-center">
                <section>
                    <p className="fs-4"><strong> {address}</strong></p>
                    <p className="fs-5"><strong> {appartment} </strong></p>
                    <p className="fs-5"><strong> {street}</strong></p></section>
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