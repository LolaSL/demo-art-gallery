import React, { useState } from 'react';
import { Alert, Button } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import './Alert.scss';

function AlertWithButton() {
    const [t] = useTranslation();

    const [show, setShow] = useState(true);
    if (show) {
        return (
            <Alert className="alert alert-secondary text-success alert-dismissible fade show" role="alert" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>{t("alert.information")}</Alert.Heading>
                <h4>{t("alert.announcement")}</h4>
            </Alert>
        );
    }
    return <Button className="btn btn-secondary" onClick={() => setShow(true)}>{t("alert.alertButton")}</Button>;


};

export default AlertWithButton;
