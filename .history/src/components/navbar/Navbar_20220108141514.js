import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-bootstrap/Nav';
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

        <div className="nav-wrapper">
            <NavLink className="navbar"
                aria-label="main navigation"
                fill variant="tabs"
                defaultActiveKey="/artGallery">
                {tabs.map((tab, index) => {
                    return (
                        <NavLink.Item key={`nav-tab-${index}`}>
                            <Link className="link" to={tab.route}> {t(`navbar.tabs.${tab.textKey}`)}</Link>
                        </NavLink.Item>
                    );
                })}
                <NavLink>
                    <Button type="button" variant="secondary" className="nav-button" onClick={() => handleClick('en')}>EN</Button>
                    <Button type="button" variant="secondary" className="nav-button" onClick={() => handleClick('ru')}>RU</Button>
                </NavLink>
            </NavLink>
        </div>

    );
}
