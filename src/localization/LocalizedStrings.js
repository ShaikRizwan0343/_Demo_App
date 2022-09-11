import LocalizedStrings from 'react-native-localization';
import en from './locales/en';

let Localization = new LocalizedStrings({
  en: en,
});

export const changeLanguage = languageKey => {
  Localization.setLanguage(languageKey);
};

export default Localization;
