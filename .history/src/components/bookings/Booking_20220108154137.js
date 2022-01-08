
import React from 'react';
import { useTranslation } from 'react-i18next';
import Art from './Art.mp4';
import * as Icon from 'react-bootstrap-icons';
import { Button, Container, Row } from 'react-bootstrap';
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
        <Container fluid>
            <div className="container">
                <h3 className="booking-info"> {info}
                    <Link to="/"> {link}</Link></h3>
                <Link to="/events">
                    <Button type="button"
                        // id="booking-btn"
                        className="btn btn-secondary rounded btn-sm">
                        {t("pages.booking.bookingButton")}
                    </Button>
                </Link>
            </div>
            <Container fluid>
                <Row><p><strong> {paymentStatus}</strong></p></Row>
                <Row><p> <Icon.Alarm /> <strong> {status}</strong></p></Row>
                <Row><p> <Icon.Calendar /><strong> {bookingStatus}</strong></p></Row>
                <Row><p> <Icon.Telephone /><strong> {phoneNumber}</strong></p></Row>
            </Container>
            <Container fluid>
                <Row><p><strong> {address}</strong></p></Row>
                <Row><p><strong> {appartment} </strong></p></Row>
                <Row><p><strong> {street}</strong></p></Row>
                <Row><p><strong> {email}</strong></p></Row>
            </Container>
            <div>
                <h2 className="trailer-title"> {t("pages.booking.header")}</h2>
            </div>
            <div className="video-container">
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
        </Container>
    );
}