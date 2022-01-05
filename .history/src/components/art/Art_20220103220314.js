import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';
import './Art.scss';


function Art({
    id,
    pictureName,
    image,
}) {

    const [t] = useTranslation();
    let url = useLocation();


    return (
        <div className="wrapper">
            <div className="card">
                <div className="card-body">
                    <img className="card-img-top"
                        src={image} alt={t(pictureName)} />
                    <div className="art-title" key={pictureName.id}>

                        <Link to={`${url.pathname}/id`}><h5>{pictureName}</h5></Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Art;