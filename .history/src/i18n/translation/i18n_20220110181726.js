import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import translationEN from '../translation/locales/en/translation.json';
import translationRU from '../translation/locales/ru/translation.json';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
}

const resources = {
    en: {
        translation: translationEN
    },
    ru: {
        translation: translationRU
    },
}

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: changeLanguage(),
        fallbackLng: "en",
        debug: true,
        interpolation: {
            escapeValue: false // react already safes from xss
        },

    });

export default i18n;