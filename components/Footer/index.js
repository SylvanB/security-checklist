// @flow
import React from 'react';
import { Container, Description, Icons } from './style';
import Icon from '../Icon';

import { withNamespaces, Trans } from '../../lib/i18n';
  
class Footer extends React.Component {
  render() { // eslint-disable-line class-methods-use-this

    const { t } = this.props
    return (
      <Container data-cy="footer">
        <Icons>
          <a
            href="https://github.com/brianlovin/security-checklist"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon glyph="github" />
          </a>
        </Icons>

        <Description>
          {t("footer.copyright")}.<Trans i18nKey="footer.github" url="https://github.com/brianlovin/security-checklist">This is
            <a
              href="{url}"
              target="_blank"
              rel="noopener noreferrer"
            >
              open source
            </a>.
          </Trans>
        </Description>
      </Container>
    );
  }
}

export default withNamespaces("components")(Footer);

