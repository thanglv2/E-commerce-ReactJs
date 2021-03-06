import React, { useEffect, useState } from 'react';
import ImageDefault from 'Images/product01.jpg';
import classnames from 'classnames';
import LazyLoad from 'react-lazyload';
import FadeLoader from 'react-spinners/FadeLoader';
import { css } from '@emotion/core';

export interface Props {
  saleOff: Number,
  productImgUrl: String,
  productPrice: Number,
  productOldPrice: Number,
  stars: Number,
  productName: String,
  isNew: Boolean,
  addToCard: Function,
};
const override = css`
    margin: 50px auto;
    display: block;
    min-height: 200px;
    text-align: center;
`;

export default function ProductItem(props) {
  const { product } = props;
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1)
  }, [])
  return (
    <div className={classnames("product product-single", { "product-hot": product.isHot ? true : false })}>
      <div className="product-thumb">
        <div className="product-label">
          {product.isNewProduct && <span>New</span>}
          <span className="sale">{product.promotions.salesOff} %</span>
        </div>
        <ul className="product-countdown">
          <li><span>00 H {count} </span></li>
          <li><span>00 M</span></li>
          <li><span>00 S</span></li>
        </ul>
        <button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
        <LazyLoad
          height={200}
          debounce={200}
          placeholder={
            <FadeLoader
              css={override}
              sizeUnit={"px"}
              height={15}
              width={5}
              radius={2}
              margin={"2px"}
              color={'#F8694A'}
              loading
            />
          }
        >
          <img src={product.imageUrls[0]} alt="" />
        </LazyLoad>
      </div>
      <div className="product-body">
        <h3 className="product-price">${product.actualPrice} <del className="product-old-price">$45.00</del></h3>
        <div className="product-rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-o empty"></i>
        </div>
        <h2 className="product-name"><a href="#">{product.productName}</a></h2>
        <div className="product-btns">
          <button className="main-btn icon-btn"><i className="fas fa-heart"></i></button>
          <button className="main-btn icon-btn"><i className="fas fa-exchange-alt"></i></button>
          <button className="primary-btn add-to-cart" onClick={() => setCount(count + 1)}><i className="fas fa-shopping-cart"></i> Add to Cart</button>
        </div>
      </div>
    </div>
  )
}