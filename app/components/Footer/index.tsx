import React from 'react';
import { FormattedMessage } from 'react-intl';

import './Footer.less'
import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import messages from './messages';

function Footer() {
  return (
    <footer>
      {/* <section>
        <FormattedMessage {...messages.licenseMessage} />
      </section>
      <section>
        <LocaleToggle />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://twitter.com/mxstbr">Max Stoiber</A>,
          }}
        />
      </section> */}
    </footer>
  );
}

export default Footer;
