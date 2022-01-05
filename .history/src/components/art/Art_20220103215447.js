import React from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, useLocation, Link } from 'react-router-dom';
import './Art.scss';


function Art({
    id,
    pictureName,
    image,

}) {

    const [t] = useTranslation();
    let url = useLocation(id);
    console.log(url);

    return (
        <div className="wrapper">
            <div className="card">
                <div className="card-body">
                    <img className="card-img-top"
                        src={image} alt={t(pictureName)} />
                    <div className="art-title" key={pictureName.id}>
                        <Routes>
                            <Link to={`${url.pathname}/id`}><h5>{pictureName}</h5></Link>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Art;