/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import { getProducts } from './actions';
import { makeSelectProducts } from './selectors';
import reducer from './reducer';
import saga from './saga';
import BoxListProducts from 'components/BoxListProducts';

const key = 'home';

export function HomePage() {
  const dispatch = useDispatch();
  const product = useSelector(makeSelectProducts());
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga, mode: null });

  useEffect(() => {
    dispatch(getProducts())
  }, []);

  return (
    <div className="container">
      <section className="deal-of-the-day">
        <BoxListProducts title="Deals Of The Day" hasBanner products={product.list} status={product.status} />
      </section>
      <section className="most-popular">
        <BoxListProducts title="Most Popular" products={product.list} status={product.status} />
      </section>
      <section className="lastest-products m-t-md">
        <BoxListProducts title="Latest products" products={product.list} status={product.status} />
      </section>
      <section className="lastest-products">
        <BoxListProducts title="Latest Products" products={product.list} status={product.status} />
      </section>
      <section className="picked-for-you">
        <BoxListProducts title="Picked for you" products={product.list} status={product.status} />
      </section>
    </div >
  );
}

export default memo(HomePage);