import React, { useEffect, useState } from 'react';
import ImageDefault from 'Images/product01.jpg';
import { HomePage } from 'containers/HomePage';
import classnames from 'classnames';
type Props = {
  saleOff: Number,
  productImgUrl: String,
  productPrice: Number,
  productOldPrice: Number,
  stars: Number,
  productName: String,
  isNew: Boolean,
  addToCard: Function,
};
export default function ProductItem(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1)
  }, [])
  return (
    <div className={classnames("product product-single", { "product-hot": props.item === 0 })}>
      <div className="product-thumb">
        <div className="product-label">
          <span>New</span>
          <span className="sale">-20%</span>
        </div>
        <ul className="product-countdown">
          <li><span>00 H {count} </span></li>
          <li><span>00 M</span></li>
          <li><span>00 S</span></li>
        </ul>
        <button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
        <img src={ImageDefault} alt="" />
      </div>
      <div className="product-body">
        <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
        <div className="product-rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-o empty"></i>
        </div>
        <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
        <div className="product-btns">
          <button className="main-btn icon-btn"><i className="fas fa-heart"></i></button>
          <button className="main-btn icon-btn"><i className="fas fa-exchange-alt"></i></button>
          <button className="primary-btn add-to-cart" onClick={() => setCount(count + 1)}><i className="fas fa-shopping-cart"></i> Add to Cart</button>
        </div>
      </div>
    </div>
  )
}