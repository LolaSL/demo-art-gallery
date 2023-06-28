import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import EnJson from './translation/en.json';
import RuJson from './translation/ru.json';
import LanguageDetector from 'i18next-browser-languagedetector';


const setLanguage = () => {
    const language = localStorage.getItem('i18nextLng');
    if (language) return language;

    localStorage.setItem('i18nextLng', 'en');
    return 'en'
}

const resources = {
    en: {
        translation: EnJson
    },
    ru: {
        translation: RuJson
    },
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        lng: setLanguage(),


        debug: false,
        whiteLists: ['en', 'ru'],
>>>>>>> a067c27641490c95c2d56164ce2dfa3c6fc4de4e
        interpolation: {
            escapeValue: false // react already safes from xss
        },

    });

export default i18n;
