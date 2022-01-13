import React from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Art.scss';


function Art({
    id,
    pictureName,
    image,
}) {

    const [t] = useTranslation();

    return (
        <div className="col-14 col-xl-14 col-lg-14">
            <div className="h-100">
                <div className="card ">
                    <img className="card-image rounded "
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

export default withTranslation()(Art);