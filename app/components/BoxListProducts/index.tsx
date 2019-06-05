import React, { useState } from 'react';
import Slider from 'react-slick';
import ProductItem from '../ProductItem';
import ImageDefault from 'Images/banner14.jpg';

export interface Props {
  title: string,
  hasBanner: boolean,
  products: [],
  status: string,
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
    slidesToShow: 4,
    slidesToScroll: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          initialSlide: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div className="row_">
      <div className="section-title">
        <h2 className="title">{props.title}</h2>
        <div className="pull-right">
          <div className="dropdown m-t-sm">
            <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Latest <i className="fas fa-caret-down"></i></a>
            <ul className="dropdown-menu custom-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">English (ENG)</a></li>
              <li><a href="#">Russian (Ru)</a></li>
              <li><a href="#">French (FR)</a></li>
              <li><a href="#">Spanish (Es)</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="list-products row">
        <Slider {...settings}>
          {props.products && props.products.length && props.products.map(product => (
            <div className="col-md-3" key={product.sku}>
              <ProductItem product={product} />
            </div>
          )
          )}
        </Slider>
      </div>
    </div>
  )
}