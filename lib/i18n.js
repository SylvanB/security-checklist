import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
  otherLanguages: ['de']
});

export const {
  appWithTranslation,
  withNamespaces,
  Trans, 
  i18n
} = NextI18NextInstance