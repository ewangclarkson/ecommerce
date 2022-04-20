import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import {TRANS_EN} from "./en/trans";
import {TRANS_FR} from "./fr/trans";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: TRANS_EN,
            },
            fr: {
                translation: TRANS_FR
            }
        }
    });

i18n.changeLanguage('en');
