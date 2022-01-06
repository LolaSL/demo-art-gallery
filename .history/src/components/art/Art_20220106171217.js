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
            {/* <div className="card h-auto"> */}

            <div className="card-body">
                <img className="img-thumbnail rounded mx-auto d-block"
                    src={image} alt={t(pictureName)} />
                <div className="art-title" key={pictureName.id}>
                    <Link to={`/artView/${id}`}><h5>{pictureName}</h5></Link>
                </div>
            </div>
        </div>
        // </div>

    )
}

export default Art;