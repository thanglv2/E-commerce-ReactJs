import React, { useState } from 'react';
import ProductItem from '../ProductItem';
import ImageDefault from 'Images/banner14.jpg';
import Slider from 'react-slick';

type Props = {
  title: String,
  hasBanner: Boolean,
}
const BannerItem = (
  <div className="banner banner-2">
    <img src={ImageDefault} alt="" />
    <div className="banner-caption">
      <h2 className="white-color">NEW<br />COLLECTION</h2>
      <button className="primary-btn">Shop Now</button>
    </div>
  </div>
)
export default function BoxListProducts(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2
  }
  return (
    <div className="row">
      <div className="section-title">
        <h2 className="title">{props.title}</h2>
      </div>
      <div className="list-products">
        <Slider {...settings}>
          {[0, 1, 2, 3].map(item => (
            <div className="col-md-3" key={item}>
              {props.hasBanner && item === 0 && BannerItem}
              <ProductItem item={item} />
            </div>
          )
          )}
        </Slider>
      </div>
    </div>
  )
}