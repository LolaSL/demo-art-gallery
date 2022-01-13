import i18n from "i18next";
import { reactI18nextModule } from 'react-i18next';
import translationEN from '../translation/locales/en/translation.json';
import translationRU from '../translation/locales/ru/translation.json';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


const setLanguage = () => {
    const language = localStorage.getItem('i18nextLng');
    if (language) return language;

    localStorage.setItem('i18nextLng', 'en');
    return 'en'
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
    .use(reactI18nextModule)// passes i18n down to react-i18next
    .init({
        resources,
        lng: setLanguage(),
        fallbackLng: "en",// use en if detected lng is not available
        keySeparator: false, // we do not use keys in form messages.welcome
        debug: true,
        interpolation: {
            escapeValue: false // react already safes from xss
        },

    });

export default i18n;