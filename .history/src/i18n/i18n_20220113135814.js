import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


const options = {
    order: ['cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    lookupLocalStorage: 'lng'
}

const setLanguage = () => {
    const language = localStorage.getItem('i18nextLng');
    if (language) return language;

    localStorage.setItem('i18nextLng', 'en');
    return 'en'
}


i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        lng: setLanguage(),
        debug: true,
        whiteLists: ['en', 'ru'],
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        detection: options,

    });

export default i18n;