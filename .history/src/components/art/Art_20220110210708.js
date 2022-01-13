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

        <div className=" card-group align-items-center justify-content-center">
            <div className="col-12 col-xl-12 col-lg-12">
                <div className="card bg-light text-white">
                    <img className="card-image rounded"
                        src={image}
                        object-fit="cover"
                        alt={t(pictureName)} />
                    <div className="card-title  mt-4" key={pictureName.id}>
                        <Link to={`/artView/${id}`} role="button"><h5 className="fs-4">{pictureName}</h5></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Art;