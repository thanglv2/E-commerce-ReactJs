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

import LoadingIndicator from 'components/LoadingIndicator';
import SilderWrapper from 'components/SilderWrapper';
import { loadHomeBanners } from './actions';
import { makeSelectHomeBanners } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { VerticalMenu } from 'containers/VerticalMenu';
import { HorizontalMenu } from 'containers/HorizontalMenu';
import { Section } from 'containers/Section';
import BoxListProducts from 'components/BoxListProducts';

const key = 'home';

export function HomePage() {
  const homeBanners: any[] = useSelector(makeSelectHomeBanners());
  const dispatch = useDispatch();

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga, mode: null });

  useEffect(() => {
    dispatch(loadHomeBanners());
  }, []);

  const homeBannerItems = bannes => {
    return bannes.map(banner =>
      <div className="banner banner-1 home-banner" key={banner.id}>
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

      {homeBanners.length > 0 ?
        <SilderWrapper children={homeBannerItems(homeBanners)} />
        :
        <div className="banner banner-1 home-banner">
          <div className='banner-caption text-center'>
            <LoadingIndicator />
          </div>
        </div>
      }

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