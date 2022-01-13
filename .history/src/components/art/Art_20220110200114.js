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

        <div className=" row-eq-height my-5 align-items-stretch justify-content-center">
            <div className="col-12 col-xl-12 col-lg-12">
                <div className="card border-1">
                    <div className="card-body text-center py-4">
                        <img className="img-thumbnail rounded position-unset"
                            src={image}
                            object-fit="cover"
                            alt={t(pictureName)} />

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