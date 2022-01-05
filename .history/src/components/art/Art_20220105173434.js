import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Art.scss';


function Art({
    id,
    pictureName,
    image,
}) {

    const [t] = useTranslation();



    return (
        <div className="wrapper">
            <div className="card">
                <div className="card-body">
                    <img className="card-img-top"
                        src={image} alt={t(pictureName)} />
                    <div className="art-title flex-fill d-flex" key={pictureName.id}>
                        <Link to={`/artView/${id}`}><p>{pictureName}</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Art;