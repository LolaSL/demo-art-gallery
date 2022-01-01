import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
// import { Styles } from '../components/Styles';

const tabs = [
    {
        route: '/',
        textKey: 'artGallery'
    },
    {
        route: '/collection/',
        textKey: 'collection'
    },
    {
        route: '/events',
        textKey: 'events'
    },
    {
        route: '/booking',
        textKey: 'booking'
    },
    {
        route: '/about',
        textKey: 'about'
    },

];

export function Navbar() {
    const [t, i18n] = useTranslation();

    function handleClick(language) {
        i18n.changeLanguage(language);
        localStorage.setItem('i18nextLng', language)
    }
    return (
        // <Styles>
        <div className="container-nav">
            <Nav className="navbar bg-light" aria-label="main navigation" fill variant="tabs" defaultActiveKey="/">
                {tabs.map((tab, index) => {
                    return (
                        <Nav.Item key={`nav-tab-${index}`}>
                            <Link variant="danger" style={{ border: "unset" }} to={tab.route}> {t(`navbar.tabs.${tab.textKey}`)}</Link>
                        </Nav.Item>
                    );
                })}
                <Nav>
                    <Button type="button" variant="primary" onClick={() => handleClick('en')}>EN</Button>
                    <Button type="button" variant="primary" onClick={() => handleClick('ru')}> RU</Button>
                </Nav>
            </Nav>
        </div>
        // </Styles>
    );
}
