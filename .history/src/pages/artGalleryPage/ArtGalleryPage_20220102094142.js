import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { mockData } from '../../mockData/datasource';
import Carousel from 'react-bootstrap/Carousel';
import './ArtGalleryPage.css';

const getCarouselArt = async () => {
    const { eventsCollection } = mockData();
    const currentLanguage = localStorage.getItem('i18nextLng');
    return await eventsCollection.getEvents(currentLanguage);
}

export default function ArtGalleryPage() {
    const [t, i18n] = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    const [carousel, setCarousel] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        getCarouselArt().then(data => {
            setCarousel(data);
            setIsLoading(false);
        })
    }, [i18n.language]);

    return isLoading ? (<div className="loader font-italic">{t("loader.loader")}</div>) :
        carousel.length ?
            (
                <div className="container pt-4 mb-4">
                    <h1 className="title mb-4" style={{ color: '#042801', textAlign: 'center', alignItems: 'center' }} >{t("carouselArt.title")}</h1>
                    <Carousel >
                        {carousel.map((slide) => {
                            const { title, type, imageUrl, information } = slide;
                            return (
                                <Carousel.Item interval={4000} key={slide.id}>
                                    <img
                                        className="d-block w-100"
                                        src={imageUrl}
                                        alt={t(title)}
                                    />
                                    <Carousel.Caption>
                                        <p >{type}</p>
                                        <p >{title}</p>
                                        <p className="text-truncate font-italic">{information}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>
            ) : (<div>{t("loader.notification1")}</div>)
};

