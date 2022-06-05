/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import i18next from 'i18next';
import english from './english.json';
import frensh from './frensh.json';
import {initReactI18next} from 'react-i18next';

import * as RNLocalize from 'react-native-localize';
const localLanguage = RNLocalize.getLocales()[0].languageCode;
// console.log(RNLocalize.getLocales()[0].languageCode);
// const localLanguage = RNLocalize.getTimeZone();
// console.log(RNLocalize.getCurrencies());
// console.log(RNLocalize.getCalendar());
// console.log(RNLocalize.getLocales());

const languageDetector = {
  async: true,
  type: 'languageDetector',
  init: () => {},
  cacheUserLanguage: () => {},
  detect: calback => {
    return calback(localLanguage);
  },
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources: {
      en: english,
      fr: frensh,
    },
    react: {
      useSuspense: false,
    },
  });
export {localLanguage};
export default i18next;
