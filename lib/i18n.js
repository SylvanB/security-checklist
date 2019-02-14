import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['de'],
  saveMissing: process.env.NODE_ENV !== 'production',
  keySeparator: "."
});

export const {
  appWithTranslation,
  withNamespaces,
  Trans, 
  i18n
} = NextI18NextInstance