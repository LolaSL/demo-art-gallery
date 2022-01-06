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
        // <div className="container-wrapper">
        <div className="row-eq-height">
            <div className="card w-100">
                <div className="card-body h-100">
                    <img className="card-img-top rounded position-unset"
                        src={image}
                        object-fit="cover"
                        alt={t(pictureName)} />
                    <div className="art-title" key={pictureName.id}>
                        <Link to={`/artView/${id}`}><h5>{pictureName}</h5></Link>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Famoust art</small>
                    </div>
                </div>
            </div>
        </div>
        // </div>

    )
}

export default Art;