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
        <div className="container-wrapper">
            <div className="col">
                <div className="card h-100">
                    <img className="card-img-top"
                        src={image} alt={t(pictureName)} />
                    <div className="card-body">
                        <div className="art-title" key={pictureName.id}>
                            <Link to={`/artView/${id}`}><h5>{pictureName}</h5></Link>
                        </div>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Famoust art</small>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Art;