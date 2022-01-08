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

        <div className="row row-eq-height">
            <div className="card">
                <div className="card-body">
                    <img className="img-thumbnail rounded position-relative"
                        src={image}
                        object-fit="cover"
                        overflow="hidden"
                        alt={t(pictureName)} />
                    <div className="art-title mt-4" key={pictureName.id}>
                        <Link to={`/artView/${id}`} role="button"><h5>{pictureName}</h5></Link>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Art;