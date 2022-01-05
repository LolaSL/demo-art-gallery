import React from 'react';
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './Art.scss';


function Art({
    id,
    pictureName,
    image,

}) {

    const [t] = useTranslation();
    let history = useHistory();
    const handleClick = () => {
        history.push(`/artView/${id}`)

    }
    return (
        <div className="row-eq-height">
            <div className="card">
                <div className="card-body">
                    <img className="card-img-top rounded"
                        src={image} alt={t(pictureName)} />
                    <div className="art-title" key={pictureName.id} style={{ cursor: 'pointer', textAlign: 'center' }} onClick={handleClick}><h5>{pictureName}</h5></div>
                </div>
            </div>
        </div>


    )
}

export default (Art);