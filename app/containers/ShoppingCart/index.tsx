/**
 *
 * ShoppingCart
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function ShoppingCart() {
  useInjectReducer({ key: 'shoppingCart', reducer });
  useInjectSaga({ key: 'shoppingCart', saga, mode: null });

  return (
    <div>
      <Helmet>
        <title>ShoppingCart</title>
        <meta name="description" content="Description of ShoppingCart" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default memo(ShoppingCart);