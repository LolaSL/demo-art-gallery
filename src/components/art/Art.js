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


        <div className="card h-100">
            <div className="col-14 col-xl-14 col-lg-14">
                <div class="card-body">
                    <img className="card-img-top rounded "
                        src={image}
                        object-fit="cover"
                        alt={t(pictureName)} />
                    <div className="card-title  mt-4 mb-4" key={pictureName.id}>
                        <Link to={`/artView/${id}`} className="art-link font-weight-bold" role="button">
                            <h6 className="picture-name text-center fs-6">{pictureName}</h6>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default withTranslation()(Art);