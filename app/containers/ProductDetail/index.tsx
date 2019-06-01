/**
 *
 * ProductDetail
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

export function ProductDetail() {
  useInjectReducer({ key: 'productDetail', reducer });
  useInjectSaga({ key: 'productDetail', saga, mode: null });

  return (
    <div>
      <Helmet>
        <title>ProductDetail</title>
        <meta name="description" content="Description of ProductDetail" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default memo(ProductDetail)
