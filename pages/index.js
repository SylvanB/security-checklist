// @flow
import * as React from 'react';
import Page, { SectionHeading, Heading, Subheading } from '../components/Page';
import type { GetInitialProps } from '../types';
import Checklist from '../components/Checklist';
import ShareButtons from '../components/ShareButtons';
import BottomShare from '../components/BottomShare';
import { Trans, withNamespaces } from "../lib/i18n";

class Index extends React.Component<{}> {
  static async getInitialProps({ res }: GetInitialProps) {
    if (res && res.setHeader) {
      // cache podcasts for a month
      const cacheAge = 60 * 60 * 24 * 30;
      res.setHeader('Cache-Control', `public,s-maxage=${cacheAge}`);
    }

    return { namespacesRequired: ["pages", "components"] };
  }

  render() {
    return (
      <Page displayProgress={true}>
        <SectionHeading>
          <Heading><Trans i18nKey="index.title">Be safe on the internet.</Trans></Heading>
          <Subheading>
          <Trans i18nKey="index.desc">An open source checklist of resources designed to improve your
            online privacy and security. Check things off to keep track as you
            go.</Trans>
          </Subheading>
        </SectionHeading>

        <div style={{ marginTop: '40px' }} />

        <ShareButtons />

        <Checklist />

        <BottomShare />
      </Page>
    );
  }
}

export default withNamespaces("pages")(Index);
