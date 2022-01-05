import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import './Art.scss';


function Art({
    id,
    pictureName,
    image,
    history
}) {

    const [t] = useTranslation();
    let url = useLocation;
    console.log(url);
    function handleClick() {
        history.push(`/art/${id}`)

    }
    return (
        <div className="wrapper">
            <div className="card">
                <div className="card-body">
                    <img className="card-img-top"
                        src={image} alt={t(pictureName)} />
                    <div className="art-title" key={pictureName.id} onClick={handleClick}><h5>{pictureName}</h5></div>
                </div>
            </div>
        </div>
    )
}

export default Art;