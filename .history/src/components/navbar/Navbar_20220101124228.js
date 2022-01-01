import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@mui/material';


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
            <NavLink className="navbar" aria-label="main navigation" fill variant="tabs" defaultActiveKey="/">
                {tabs.map((tab, index) => {
                    return (
                        <NavLink key={`nav-tab-${index}`}>
                            <Link to={tab.route}> {t(`navbar.tabs.${tab.textKey}`)}</Link>
                        </NavLink>
                    );
                })}
                <NavLink>
                    <Button variant="contained" onClick={() => handleClick('en')}>EN</Button>
                    <Button Button variant="contained" onClick={() => handleClick('ru')}> RU</Button>
                </NavLink>
            </NavLink>
        </div>
        // </Styles>
    );
}