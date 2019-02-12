import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
  localeSubpaths: true,
  otherLanguages: ['de']
});

export default NextI18NextInstance