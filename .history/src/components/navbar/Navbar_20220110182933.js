import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import './Navbar.scss'


const tabs = [
    {
        route: '/',
        textKey: 'artGallery'
    },
    {
        route: '/collection',
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

export const Navbar = () => {
    const [t, i18n] = useTranslation();

    function handleClick(language) {
        i18n.changeLanguage(language);
        localStorage.setItem('i18nextLng', language)
    }
    return (

        <div className="fluid">
            <Nav className="navbar navbar-expand-m"
                aria-label="main navigation"
                fill variant="tabs"
                defaultActiveKey="/artGallery">
                {tabs.map((tab, index) => {
                    return (
                        <Nav.Item key={`nav-tab-${index}`}>
                            <Link className="link" to={tab.route}> {t(`navbar.tabs.${tab.textKey}`)}</Link>
                        </Nav.Item>
                    );
                })}
                <Nav>
                    <div id="nav-button-en">
                        <Button type="button" className="btn btn-secondary navbar-btn" onClick={() => handleClick('en')}>EN</Button>
                    </div>
                    <div id="nav-button-ru">
                        <Button type="button" className="btn btn-secondary navbar-btn" onClick={() => handleClick('ru')}>RU</Button>
                    </div>
                </Nav>
            </Nav>
        </div>

    );
}
