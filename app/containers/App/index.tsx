/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import ProductList from 'containers/ProductList';
import ProductDetail from 'containers/ProductDetail';
import ShoppingCart from 'containers/ShoppingCart';
import NotFoundPage from 'containers/NotFoundPage';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';
import styles from './App.less';

declare module 'react' {
  interface HTMLAttributes<T> {
    attribution?: string;
    page_id?: string;
    logged_in_greeting?: string;
    logged_out_greeting?: string;
  }
}

export default function App() {
  return (
    <div className={styles.appWrapper}>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/product-list" component={ProductList} />
        <Route path="/products/:product_id" component={ProductDetail} />
        <Route path="/shopping-cart" component={ShoppingCart} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <div id="fb-root"></div>
      <div className="fb-customerchat"
        attribution="setup_tool"
        page_id="681926292230886"
        logged_in_greeting="Chào bạn, mình có thể giúp gì cho bạn không?"
        logged_out_greeting="Đăng nhập để tiếp tục">
      </div>
      <Footer />
      <GlobalStyle />
    </div>
  );
}
