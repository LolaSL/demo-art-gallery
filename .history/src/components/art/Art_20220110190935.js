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

        <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
                <div className="card">
                    <img className="card-img-top rounded"
                        src={image}
                        object-fit="cover"
                        alt={t(pictureName)} />
                    <div className="card-body">
                        <div className="card-title mt-4" key={pictureName.id}>
                            <Link to={`/artView/${id}`} role="button"><h5>{pictureName}</h5></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Art;