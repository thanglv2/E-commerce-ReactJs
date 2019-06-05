/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo, FormEvent } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import classNames from 'classnames';
import Section from 'containers/Section';
import LoadingIndicator from 'components/LoadingIndicator';
import SilderWrapper from 'components/SilderWrapper';
import { loadHomeBanners, getProducts } from './actions';
import { makeSelectHomeBanners, makeSelectProducts } from './selectors';
import reducer from './reducer';
import saga from './saga';
import BoxListProducts from 'components/BoxListProducts';

const key = 'home';

export function HomePage() {
  const product = useSelector(makeSelectProducts());
  const homeBanners: any[] = useSelector(makeSelectHomeBanners());
  const dispatch = useDispatch();

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga, mode: null });

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  useEffect(() => {
    dispatch(loadHomeBanners());
  }, [])

  const homeBannerItems = bannes => {
    return bannes.map(banner =>
      <div className="banner banner-1" key={banner.id}>
        <img src={banner.url} />
        <div className={classNames(`banner-caption ${banner.isCenter && 'text-center'}`)}>
          <h1 className={banner.title.color}>{banner.title.name}<br />
            {banner.campaign.isUppercase &&
              <span className='white-color'>{banner.campaign.name}</span>}
          </h1>
          {!banner.campaign.isUppercase && <h3 className="white-color font-weak">{banner.campaign.name}</h3>}
          < button className="primary-btn">Shop Now</button>
        </div>
      </div >
    )
  }

  return (
    <div className="container">
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>

      <div id="home">
        <div className="container">
          <div className="home-wrap">
            <div id="home-slick">
              {homeBanners && homeBanners.length > 0 ?
                <SilderWrapper children={homeBannerItems(homeBanners)} />
                :
                <div className="banner banner-1">
                  <div className='banner-caption text-center'>
                    <LoadingIndicator />
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>

      <Section />
      <section className="deal-of-the-day">
        <BoxListProducts title="Deals Of The Day" hasBanner products={product.list} status={product.status} />
      </section>
      <section className="most-popular m-t-xl">
        <BoxListProducts title="Most Popular" products={product.list} status={product.status} />
      </section>
      <section className="lastest-products m-t-xl">
        <BoxListProducts title="Latest products" products={product.list} status={product.status} />
      </section>
      <section className="lastest-products m-t-xl">
        <BoxListProducts title="Latest Products" products={product.list} status={product.status} />
      </section>
      <section className="picked-for-you m-t-xl">
        <BoxListProducts title="Picked for you" products={product.list} status={product.status} />
      </section>
    </div>
  );
}

export default memo(HomePage);