/**
 *
 * VerticalMenu
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { VerticalMenuItem } from 'containers/VerticalMenuItem';
import makeSelectVerticalMenu from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

const dataContent1 = [
  {
    title: 'Category 1',
    value: [
      'Women’s Clothing',
      'Men’s Clothing',
      'Phones & Accessories',
      'Jewelry & Watches',
      'Bags & Shoes',
    ],
  },
  {
    title: 'Category 2',
    value: [
      'Women’s Clothing',
      'Men’s Clothing',
      'Phones & Accessories',
      'Jewelry & Watches',
      'Bags & Shoes',
    ],
  },
  {
    title: 'Category 3',
    value: [
      'Women’s Clothing',
      'Men’s Clothing',
      'Phones & Accessories',
      'Jewelry & Watches',
      'Bags & Shoes',
    ],
  },
];
// const dataContent2 = dataContent1;
const dataContent3 = dataContent1;
// const dataContent4 = dataContent1;
// const dataContent5 = dataContent1;
const dataContent6 = dataContent1;
// const dataContent7 = dataContent1;
// const dataContent8 = dataContent1;

export interface Props {

}

export function VerticalMenu(props: Props) {
  useInjectReducer({ key: 'verticalMenu', reducer });
  useInjectSaga({ key: 'verticalMenu', saga, mode: null });

  return (
    <div>
      {/* <FormattedMessage {...messages.header} /> */}
      {/* Vertical Menu */}
      {/* <!-- NAVIGATION --> */}
      <div id="navigation">
        {/* <!-- container --> */}
        <div className="container">
          <div id="responsive-nav">
            {/* <!-- category nav --> */}
            <div className="category-nav">
              <span className="category-header">
                Categories <i className="fa fa-list" />
              </span>
              <ul className="category-list">
                <VerticalMenuItem
                  data={dataContent1}
                  title="Women’s Clothing 1"
                />
                <VerticalMenuItem title="Women’s Clothing 2" data={[]} />
                <VerticalMenuItem
                  data={dataContent3}
                  title="Women’s Clothing 3"
                />
                <VerticalMenuItem title="Women’s Clothing 4" data={[]} />
                <VerticalMenuItem title="Women’s Clothing 5" data={[]} />
                <VerticalMenuItem
                  data={dataContent6}
                  title="Women’s Clothing 6"
                />
                <VerticalMenuItem title="Women’s Clothing 7" data={[]} />
                <VerticalMenuItem title="Women’s Clothing 8" data={[]} />
              </ul>
            </div>
            {/* <!-- menu nav --> */}
          </div>
        </div>
        {/* <!-- /container --> */}
      </div>
      {/* <!-- /NAVIGATION --> */}
    </div>
  );
}

export default VerticalMenu;