import React, { useState, useEffect } from 'react';
import { useTranslation, withTranslation } from 'react-i18next'
import { mockData } from '../../mockData/datasource';
import { Button } from 'react-bootstrap';
import './ArtViewPage.scss';
import { useParams, Link } from 'react-router-dom'


const getArtView = async (id, callback) => {
    const { artsCollection } = mockData();
    const currentLanguage = localStorage.getItem('i18nextLng');
    const artView = await artsCollection.getArtById(id, currentLanguage);
    callback(artView);
}

const ArtViewPage = () => {
    const [t, i18n] = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    const [artView, setArtView] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        const setDataCallback = (data) => {
            setArtView(data);
            setIsLoading(false);

        }
        getArtView(id, setDataCallback);
    }, [id, i18n.language,]);

    return isLoading ? (< div className=" loader d-flex align-items-center py-2">
        <strong>{t("loader.loader")}</strong>
        <div className="spinner-border ml-auto text-success" role="status" aria-hidden="true"></div>
    </div>) :
        artView ? (
            <div className="container-art">
                <h1 className="art-title text-center fs-3">{t("pictureInformation.title")}</h1>
                <div className='art  mb-4'>
                    <img className="img mx-auto d-block mb-4"
                        src={artView.image}
                        alt={artView.pictureName}></img>
                    <div className='art-info'>
                        <div className=" blockquote">
                            <h2 className="blockquote-header fs-3">{t("newArt.name")} {artView.pictureName}</h2>
                        </div>
                        <div className=" blockquote text-justify">
                            <h4 className="fs-4">{t("newArt.artist")} {artView.painter}</h4>
                            <h5 className="fs-5">{t("newArt.lifeAndCountry")}{artView.lifeAndCountry}</h5>
                            <h6 className="fs-6">{t("newArt.description")} {artView.body}</h6>
                            <h6 className="fs-6">{t("newArt.dimention")} {artView.dimention}</h6>
                            <h6 className="fs-6">{t("newArt.matherials")} {artView.matherial}</h6>
                            <h6 className="block mb-4 fs-6">{t("newArt.date")} {artView.year}</h6>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <Link to='/collection'>
                            <Button
                                type="button"
                                className="btn btn-secondary rounded mx-auto">
                                {t("title.button")}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

        ) : (<div>{t("loader.notification")}</div>)
}
export default withTranslation()(ArtViewPage);