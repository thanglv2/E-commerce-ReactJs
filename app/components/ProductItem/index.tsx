import React from 'react';
const ProductItem = () => {
  return (
    <div className="product product-single">
      <a href="#_">Test</a>
      <div className="product-thumb">
        <div className="product-label">
          <span>New</span>
          <span className="sale">-20%</span>
        </div>
        <ul className="product-countdown">
          <li><span>00 H</span></li>
          <li><span>00 M</span></li>
          <li><span>00 S</span></li>
        </ul>
        <button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
        <img src="@image/product01.jpg" alt="" />
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
          <button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
          <button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
          <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
export default ProductItem;