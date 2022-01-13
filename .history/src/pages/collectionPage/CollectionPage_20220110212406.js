import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SearchForm from '../../components/searchForm/SearchForm';
import Art from '../../components/art/Art';
import { mockData } from '../../mockData/datasource';
import './CollectionPage.scss';


// async funtion to get data from server
const getArtItems = async (callback) => {
    const { artsCollection } = mockData();
    const currentLanguage = localStorage.getItem('i18nextLng');
    const arts = await artsCollection.getArts(currentLanguage);

    // some callback to set the state when the fetch is done
    callback(arts);
};

const searchMecanism = (item, text) => {
    // lower case all data texts
    const pictureNameMatch = item.pictureName.toLowerCase();
    const painterMatch = item.painter.toLowerCase();
    const yearMatch = item.year.toString();
    const matherialMatch = item.matherial.toLowerCase();

    // lower case the fliter text
    const textToSearch = text.toLowerCase();

    // get one of the matches - pictureName | painter
    return pictureNameMatch.includes(textToSearch) || painterMatch.includes(textToSearch) || yearMatch.includes(textToSearch) || matherialMatch.includes(textToSearch);
};

function CollectionPage() {
    const [t, i18n] = useTranslation();

    // state of lists
    const [originalArts, setOriginalArts] = useState([]);

    // state of loading
    const [isLoading, setIsLoading] = useState(true);

    // state of lists
    const [filtredArts, setFiltredArts] = useState([]);

    // state of current filter
    const [filterText, setFilterText] = useState('');



    useEffect(() => {
        //reset all curent filters 
        setFilterText("");
        // show loader when language is changed
        setIsLoading(true);

        // get new data in the current language
        getArtItems((arts) => {
            setOriginalArts(arts);
            setIsLoading(false);
        });

    }, [i18n.language]);  // on language change -> invoke my inner logic (callback)




    // on text change - filter artItemns
    useEffect(
        () => {
            const newFiltredArts = originalArts.filter((art) => searchMecanism(art, filterText));
            setFiltredArts(newFiltredArts);

        },
        [filterText, originalArts]
    );
    // do effect when - filterText changed or originalArts changed

    // our goal is to filter the list when filterText is changed

    // SearchForm on change -> set a new filterText state

    // filters originalArts -> sets a new filtredArts state

    //  on update - rerender the html (maps the Art component)

    return (
        <main className="container">
            <div>
                <h1 className="collection-title">{t('pages.collection.title')}</h1>
            </div>
            <div className="form-outline mb-4 pt-4">
                <SearchForm
                    text={filterText}
                    onChange={(text) =>
                        setFilterText(text)} />
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 align-items-stretch justify-content-center">
                {/* show loader if isLoading is true */}
                {isLoading && < div className=" loader d-flex align-items-center">
                    <strong>{t("loader.loader")}</strong>
                    <div className="spinner-border ml-auto text-success" role="status" aria-hidden="true"></div>
                </div>}
                {/* map the filtred art items results to an Art component */}
                {!isLoading &&
                    filtredArts.length > 0 &&
                    filtredArts.map(({ id, pictureName, image, lifeAndCountry, painter, body, dimention, matherial, year }) => {
                        return (
                            <div key={id}>
                                <section className="art d-flex h-100 py-4 px-4">
                                    <Art
                                        id={id}
                                        pictureName={pictureName}
                                        image={image}
                                        painter={painter}
                                        lifeAndCountry={lifeAndCountry}
                                        body={body}
                                        dimention={dimention}
                                        matherial={matherial}
                                        year={year}
                                    />
                                </section>
                            </div>
                        );
                    })}
                {/* if no results is shown match to text */}
                {!isLoading && !filtredArts.length && <div>
                    <p className="position-absolute text-danger fs-2 text-uppercase">{t("title.1")}</p>
                </div>}
            </div>
        </main>
    );
}

export default CollectionPage;