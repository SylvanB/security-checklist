// @flow
import * as React from 'react';
import Link from 'next/link';
import { Container, ButtonRowContainer, Label, LogoLink } from './style';
import { PrimaryButton, GhostButton } from '../Button';
import Logo from './Logo';
import { Trans, withNamespaces, i18n } from "../../lib/i18n";

type Props = {
  showHeaderShadow: boolean,
};

export default withNamespaces("header")(function Header(props: Props) {
  const { showHeaderShadow, t } = props;

  return (
    <Container showHeaderShadow={showHeaderShadow} data-cy="header">
      <div>
        <Link href="/">
          <LogoLink href="/">
            <Label>Security Checklist</Label>
            <Logo />
          </LogoLink>
        </Link>
      </div>

      <ButtonRowContainer>
        <button
          type='button'
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
        >
          {t('toggle-locale')}
        </button>
        <Link href="/about">
          <GhostButton as="a" href="/about">
            <Trans i18nKey="title">About</Trans>
          </GhostButton>
        </Link>

        <PrimaryButton
          href="https://github.com/brianlovin/security-checklist"
          target="_blank"
          rel="noopener noreferrer"
          as="a"
        >
          <Trans i18nKey="contribute">Contribute</Trans>
        </PrimaryButton>
      </ButtonRowContainer>
    </Container>
  );
})
