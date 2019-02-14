// @flow
import * as React from 'react';
import Link from 'next/link';
import {
  Container,
  ButtonRowContainer,
  Label,
  LogoLink,
  Progression,
  ProgressBar,
  ProgressLabel } from './style';
import { PrimaryButton, GhostButton } from '../Button';
import Logo from './Logo';
import { Trans, withNamespaces, i18n } from "../../lib/i18n";
import Confetti from './Confetti';

type Props = {
  showHeaderShadow: boolean,
  displayProgress: boolean,
  totalItemsCount: number,
  currentCount: number,
};

export default withNamespaces("components")(function Header(props: Props) {
  const { showHeaderShadow, totalItemsCount, currentCount, displayProgress, t } = props;

  return (
    <Container showHeaderShadow={showHeaderShadow} data-cy="header">
      <div>
        <Link href="/">
          <LogoLink href="/">
            <Label><Trans i18nKey="header.logo">Security Checklist</Trans></Label>
            <Logo />
          </LogoLink>
        </Link>
      </div>

      <ButtonRowContainer>
        <button
          type='button'
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
        >
          {t('header.toggle-locale')}
        </button>
        <Link href="/about">
          <GhostButton as="a" href="/about">
            <Trans i18nKey="header.title">About</Trans>
          </GhostButton>
        </Link>

        <PrimaryButton
          href="https://github.com/brianlovin/security-checklist"
          target="_blank"
          rel="noopener noreferrer"
          as="a"
        >
          <Trans i18nKey="header.contribute">Contribute</Trans>
        </PrimaryButton>
      </ButtonRowContainer>

      { displayProgress && (
      <Progression
        id="progress"
        aria-label={`${currentCount} of ${totalItemsCount} completed`}
        tabIndex="0"
      >
        <ProgressBar
          id="progress_bar"
          aria-describedby="progress_tooltip"
          disabled={currentCount > 0 ? false : true}
        />
        <ProgressLabel
          id="progress_tooltip"
          role="tooltip"
        >
          { currentCount === totalItemsCount
            ? `🎉 Checklist complete! 🎉`
            : `${currentCount} of ${totalItemsCount} completed`}
        </ProgressLabel>
        <Confetti fireConfetti={currentCount === totalItemsCount} />
      </Progression>)}
    </Container>
  );
})
