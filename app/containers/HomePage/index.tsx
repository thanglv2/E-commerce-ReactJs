/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo, FormEvent } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';
import Banner01 from 'Images/banner01.jpg';

// import {
//   makeSelectRepos,
//   makeSelectLoading,
//   makeSelectError,
// } from 'containers/App/selectors';
import H2 from 'components/H2';
import ProductItem from 'components/ProductItem';
// import ReposList from 'components/ReposList';
import styles from './HomePage.less';
import messages from './messages';
// import { loadRepos } from '../App/actions';
import { changeItemName, loadItems } from './actions';
import { makeSelectItemName, makeSelectItems, makeLoadingItems } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { VerticalMenu } from 'containers/VerticalMenu';
import { HorizontalMenu } from 'containers/HorizontalMenu';
import { Section } from 'containers/Section';
import BoxListProducts from 'components/BoxListProducts';

const key = 'home';

export function HomePage() {

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga, mode: null });

  useEffect(() => {
  }, []);

  return (
    <div className="container">
      {/* <section className={classNames(styles.defaultSection, styles.center)}>
        {loadingItems && <span className={styles.centerSpan}>Loading...</span>}
      </section> */}
      <section className="deal-of-the-day">
        <BoxListProducts title="Deals Of The Day" hasBanner />
      </section>
      <section className="most-popular">
        <BoxListProducts title="Most Popular" />
      </section>
      <section className="lastest-products m-t-md">
        <BoxListProducts title="Latest products" />
      </section>
      <section className="lastest-products">
        <BoxListProducts title="Latest Products" />
      </section>
    </div >
  );
}

export default memo(HomePage);