import React from 'react';
import { useTranslation } from 'react-i18next';
import './Art.scss';


function Art({
    id,
    pictureName,
    image,
    history
}) {

    const [t] = useTranslation();

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