/**
 *
 * ProductList
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

export function ProductList() {
  useInjectReducer({ key: 'productList', reducer });
  useInjectSaga({ key: 'productList', saga, mode: null });

  return (
    <div>
      <Helmet>
        <title>ProductList</title>
        <meta name="description" content="Description of ProductList" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default memo(ProductList);
