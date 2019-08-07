import React from "react";
import banner14 from "../../Assests/img/banner14.jpg";
import product7 from "../../Assests/img/product07.jpg";
import product6 from "../../Assests/img/product02.jpg";
import product2 from "../../Assests/img/product06.jpg";

export default function index() {
  return (
    <div className="section">
      {/* container */}
      <div className="container">
        {/* row */}
        <div className="row">
          {/* section-title */}
          <div className="col-md-12">
            <div className="section-title">
              <h2 className="title">Deals Of The Day</h2>
              <div className="pull-right">
                <div className="product-slick-dots-1 custom-dots">
                  <ul
                    className="slick-dots"
                    role="tablist"
                    style={{ display: "block" }}
                  >
                    <li className="slick-active" role="presentation">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control10"
                        aria-controls="slick-slide10"
                        aria-label="1 of 2"
                        tabIndex={-1}
                      >
                        1
                      </button>
                    </li>
                    <li role="presentation" className="">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control11"
                        aria-controls="slick-slide12"
                        aria-label="2 of 2"
                        tabIndex={-1}
                      >
                        2
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /section-title */}
          {/* banner */}
          <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="banner banner-2">
              <img src={banner14} alt="" />
              <div className="banner-caption">
                <h2 className="white-color">
                  NEW
                  <br />
                  COLLECTION
                </h2>
                <button className="primary-btn">Shop Now</button>
              </div>
            </div>
          </div>
          {/* /banner */}
          {/* Product Slick */}
          <div className="col-md-9 col-sm-6 col-xs-6">
            <div className="row">
              <div
                id="product-slick-1"
                className="product-slick slick-initialized slick-slider slick-dotted"
              >
                {/* Product Single */}
                {/* /Product Single */}
                {/* Product Single */}
                {/* /Product Single */}
                {/* Product Single */}
                {/* /Product Single */}
                {/* Product Single */}
                {/* /Product Single */}
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 3223,
                      transform: "translate3d(-2051px, 0px, 0px)",
                      transition: "transform 300ms ease 0s"
                    }}
                  >
                    <div
                      className="product product-single slick-slide slick-cloned"
                      tabIndex={-1}
                      role="tabpanel"
                      style={{ width: 263 }}
                      data-slick-index={-3}
                      aria-hidden="true"
                    >
                      <div className="product-thumb">
                        <div className="product-label">
                          <span className="sale">-20%</span>
                        </div>
                        <ul className="product-countdown">
                          <li>
                            <span>00 H</span>
                          </li>
                          <li>
                            <span>00 M</span>
                          </li>
                          <li>
                            <span>00 S</span>
                          </li>
                        </ul>
                        <button className="main-btn quick-view" tabIndex={-1}>
                          <i className="fa fa-search-plus" /> Quick view
                        </button>
                        <img src={product6} alt="" />
                      </div>
                      <div className="product-body">
                        <h3 className="product-price">
                          $32.50 <del className="product-old-price">$45.00</del>
                        </h3>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o empty" />
                        </div>
                        <h2 className="product-name">
                          <a
                            href="file:///C:/Users/usman/Desktop/e-shop/index.html#"
                            tabIndex={-1}
                          >
                            Product Name Goes Here
                          </a>
                        </h2>
                        <div className="product-btns">
                          <button className="main-btn icon-btn" tabIndex={-1}>
                            <i className="fa fa-heart" />
                          </button>
                          <button className="main-btn icon-btn" tabIndex={-1}>
                            <i className="fa fa-exchange" />
                          </button>
                          <button
                            className="primary-btn add-to-cart"
                            tabIndex={-1}
                          >
                            <i className="fa fa-shopping-cart" /> Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product product-single slick-slide slick-cloned"
                      tabIndex={-1}
                      role="tabpanel"
                      aria-describedby="slick-slide-control11"
                      style={{ width: 263 }}
                      data-slick-index={-2}
                      aria-hidden="true"
                    >
                      <div className="product-thumb">
                        <div className="product-label">
                          <span>New</span>
                          <span className="sale">-20%</span>
                        </div>
                        <ul className="product-countdown">
                          <li>
                            <span>00 H</span>
                          </li>
                          <li>
                            <span>00 M</span>
                          </li>
                          <li>
                            <span>00 S</span>
                          </li>
                        </ul>
                        <button className="main-btn quick-view" tabIndex={-1}>
                          <i className="fa fa-search-plus" /> Quick view
                        </button>
                        <img src={product2} alt="" />
                      </div>
                      <div className="product-body">
                        <h3 className="product-price">
                          $32.50 <del className="product-old-price">$45.00</del>
                        </h3>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o empty" />
                        </div>
                        <h2 className="product-name">
                          <a
                            href="file:///C:/Users/usman/Desktop/e-shop/index.html#"
                            tabIndex={-1}
                          >
                            Product Name Goes Here
                          </a>
                        </h2>
                        <div className="product-btns">
                          <button className="main-btn icon-btn" tabIndex={-1}>
                            <i className="fa fa-heart" />
                          </button>
                          <button className="main-btn icon-btn" tabIndex={-1}>
                            <i className="fa fa-exchange" />
                          </button>
                          <button
                            className="primary-btn add-to-cart"
                            tabIndex={-1}
                          >
                            <i className="fa fa-shopping-cart" /> Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product product-single slick-slide slick-cloned"
                      tabIndex={-1}
                      role="tabpanel"
                      style={{ width: 263 }}
                      data-slick-index={-1}
                      aria-hidden="true"
                    >
                      <div className="product-thumb">
                        <div className="product-label">
                          <span>New</span>
                          <span className="sale">-20%</span>
                        </div>
                        <ul className="product-countdown">
                          <li>
                            <span>00 H</span>
                          </li>
                          <li>
                            <span>00 M</span>
                          </li>
                          <li>
                            <span>00 S</span>
                          </li>
                        </ul>
                        <button className="main-btn quick-view" tabIndex={-1}>
                          <i className="fa fa-search-plus" /> Quick view
                        </button>
                        <img src={product7} alt="" />
                      </div>
                      <div className="product-body">
                        <h3 className="product-price">
                          $32.50 <del className="product-old-price">$45.00</del>
                        </h3>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o empty" />
                        </div>
                        <h2 className="product-name">
                          <a
                            href="file:///C:/Users/usman/Desktop/e-shop/index.html#"
                            tabIndex={-1}
                          >
                            Product Name Goes Here
                          </a>
                        </h2>
                        <div className="product-btns">
                          <button className="main-btn icon-btn" tabIndex={-1}>
                            <i className="fa fa-heart" />
                          </button>
                          <button className="main-btn icon-btn" tabIndex={-1}>
                            <i className="fa fa-exchange" />
                          </button>
                          <button
                            className="primary-btn add-to-cart"
                            tabIndex={-1}
                          >
                            <i className="fa fa-shopping-cart" /> Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product product-single slick-slide slick-current slick-active"
                      tabIndex={-1}
                      role="tabpanel"
                      id="slick-slide10"
                      aria-describedby="slick-slide-control10"
                      style={{ width: 263 }}
                      data-slick-index={0}
                      aria-hidden="false"
                    >
                      <div className="product-thumb">
                        <div className="product-label">
                          <span>New</span>
                          <span className="sale">-20%</span>
                        </div>
                        <ul className="product-countdown">
                          <li>
                            <span>00 H</span>
                          </li>
                          <li>
                            <span>00 M</span>
                          </li>
                          <li>
                            <span>00 S</span>
                          </li>
                        </ul>
                        <button className="main-btn quick-view" tabIndex={-1}>
                          <i className="fa fa-search-plus" /> Quick view
                        </button>
                        <img src={product6} alt="" />
                      </div>
                      <div className="product-body">
                        <h3 className="product-price">
                          $32.50 <del className="product-old-price">$45.00</del>
                        </h3>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o empty" />
                        </div>
                        <h2 className="product-name">
                          <a
                            href="file:///C:/Users/usman/Desktop/e-shop/index.html#"
                            tabIndex={-1}
                          >
                            Product Name Goes Here
                          </a>
                        </h2>
                        <div className="product-btns">
                          <button className="main-btn icon-btn" tabIndex={-1}>
                            <i className="fa fa-heart" />
                          </button>
                          <button className="main-btn icon-btn" tabIndex={-1}>
                            <i className="fa fa-exchange" />
                          </button>
                          <button
                            className="primary-btn add-to-cart"
                            tabIndex={-1}
                          >
                            <i className="fa fa-shopping-cart" /> Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product product-single slick-slide slick-active"
                      tabIndex={-1}
                      role="tabpanel"
                      id="slick-slide11"
                      style={{ width: 263 }}
                      data-slick-index={1}
                      aria-hidden="false"
                    >
                      <div className="product-thumb">
                        <div className="product-label">
                          <span className="sale">-20%</span>
                        </div>
                        <ul className="product-countdown">
                          <li>
                            <span>00 H</span>
                          </li>
                          <li>
                            <span>00 M</span>
                          </li>
                          <li>
                            <span>00 S</span>
                          </li>
                        </ul>
                        <button className="main-btn quick-view" tabIndex={-1}>
                          <i className="fa fa-search-plus" /> Quick view
                        </button>
                        <img src={product7} alt="" />
                      </div>
                      <div className="product-body">
                        <h3 className="product-price">
                          $32.50 <del className="product-old-price">$45.00</del>
                        </h3>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o empty" />
                        </div>
                        <h2 className="product-name">
                          <a
                            href="file:///C:/Users/usman/Desktop/e-shop/index.html#"
                            tabIndex={-1}
                          >
                            Product Name Goes Here
                          </a>
                        </h2>
                        <div className="product-btns">
                          <button className="main-btn icon-btn" tabIndex={-1}>
                            <i className="fa fa-heart" />
                          </button>
                          <button className="main-btn icon-btn" tabIndex={-1}>
                            <i className="fa fa-exchange" />
                          </button>
                          <button
                            className="primary-btn add-to-cart"
                            tabIndex={-1}
                          >
                            <i className="fa fa-shopping-cart" /> Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product product-single slick-slide slick-active"
                      tabIndex={0}
                      role="tabpanel"
                      id="slick-slide12"
                      aria-describedby="slick-slide-control11"
                      style={{ width: 263 }}
                      data-slick-index={2}
                      aria-hidden="false"
                    >
                      <div className="product-thumb">
                        <div className="product-label">
                          <span>New</span>
                          <span className="sale">-20%</span>
                        </div>
                        <ul className="product-countdown">
                          <li>
                            <span>00 H</span>
                          </li>
                          <li>
                            <span>00 M</span>
                          </li>
                          <li>
                            <span>00 S</span>
                          </li>
                        </ul>
                        <button className="main-btn quick-view" tabIndex={0}>
                          <i className="fa fa-search-plus" /> Quick view
                        </button>
                        <img src={product6} alt="" />
                      </div>
                      <div className="product-body">
                        <h3 className="product-price">
                          $32.50 <del className="product-old-price">$45.00</del>
                        </h3>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o empty" />
                        </div>
                        <h2 className="product-name">
                          <a
                            href="file:///C:/Users/usman/Desktop/e-shop/index.html#"
                            tabIndex={0}
                          >
                            Product Name Goes Here
                          </a>
                        </h2>
                        <div className="product-btns">
                          <button className="main-btn icon-btn" tabIndex={0}>
                            <i className="fa fa-heart" />
                          </button>
                          <button className="main-btn icon-btn" tabIndex={0}>
                            <i className="fa fa-exchange" />
                          </button>
                          <button
                            className="primary-btn add-to-cart"
                            tabIndex={0}
                          >
                            <i className="fa fa-shopping-cart" /> Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product product-single slick-slide"
                      tabIndex={0}
                      role="tabpanel"
                      id="slick-slide13"
                      style={{ width: 263 }}
                      data-slick-index={3}
                      aria-hidden="true"
                    >
                      <div className="product-thumb">
                        <div className="product-label">
                          <span>New</span>
                          <span className="sale">-20%</span>
                        </div>
                        <ul className="product-countdown">
                          <li>
                            <span>00 H</span>
                          </li>
                          <li>
                            <span>00 M</span>
                          </li>
                          <li>
                            <span>00 S</span>
                          </li>
                        </ul>
                        <button className="main-btn quick-view" tabIndex={0}>
                          <i className="fa fa-search-plus" /> Quick view
                        </button>
                        <img src={product2} alt="" />
                      </div>
                      <div className="product-body">
                        <h3 className="product-price">
                          $32.50 <del className="product-old-price">$45.00</del>
                        </h3>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o empty" />
                        </div>
                        <h2 className="product-name">
                          <a
                            href="file:///C:/Users/usman/Desktop/e-shop/index.html#"
                            tabIndex={0}
                          >
                            Product Name Goes Here
                          </a>
                        </h2>
                        <div className="product-btns">
                          <button className="main-btn icon-btn" tabIndex={0}>
                            <i className="fa fa-heart" />
                          </button>
                          <button className="main-btn icon-btn" tabIndex={0}>
                            <i className="fa fa-exchange" />
                          </button>
                          <button
                            className="primary-btn add-to-cart"
                            tabIndex={0}
                          >
                            <i className="fa fa-shopping-cart" /> Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product product-single slick-slide slick-cloned"
                      tabIndex={-1}
                      role="tabpanel"
                      aria-describedby="slick-slide-control10"
                      style={{ width: 263 }}
                      data-slick-index={4}
                      aria-hidden="true"
                    >
                      <div className="product-thumb">
                        <div className="product-label">
                          <span>New</span>
                          <span className="sale">-20%</span>
                        </div>
                        <ul className="product-countdown">
                          <li>
                            <span>00 H</span>
                          </li>
                          <li>
                            <span>00 M</span>
                          </li>
                          <li>
                            <span>00 S</span>
                          </li>
                        </ul>
                        <button className="main-btn quick-view" tabIndex={0}>
                          <i className="fa fa-search-plus" /> Quick view
                        </button>
                        <img src={product7} alt="" />
                      </div>
                      <div className="product-body">
                        <h3 className="product-price">
                          $32.50 <del className="product-old-price">$45.00</del>
                        </h3>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o empty" />
                        </div>
                        <h2 className="product-name">
                          <a
                            href="file:///C:/Users/usman/Desktop/e-shop/index.html#"
                            tabIndex={0}
                          >
                            Product Name Goes Here
                          </a>
                        </h2>
                        <div className="product-btns">
                          <button className="main-btn icon-btn" tabIndex={0}>
                            <i className="fa fa-heart" />
                          </button>
                          <button className="main-btn icon-btn" tabIndex={0}>
                            <i className="fa fa-exchange" />
                          </button>
                          <button
                            className="primary-btn add-to-cart"
                            tabIndex={0}
                          >
                            <i className="fa fa-shopping-cart" /> Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product product-single slick-slide slick-cloned"
                      tabIndex={-1}
                      role="tabpanel"
                      style={{ width: 263 }}
                      data-slick-index={5}
                      aria-hidden="true"
                    >
                      <div className="product-thumb">
                        <div className="product-label">
                          <span className="sale">-20%</span>
                        </div>
                        <ul className="product-countdown">
                          <li>
                            <span>00 H</span>
                          </li>
                          <li>
                            <span>00 M</span>
                          </li>
                          <li>
                            <span>00 S</span>
                          </li>
                        </ul>
                        <button className="main-btn quick-view" tabIndex={-1}>
                          <i className="fa fa-search-plus" /> Quick view
                        </button>
                        <img src={product2} alt="" />
                      </div>
                      <div className="product-body">
                        <h3 className="product-price">
                          $32.50 <del className="product-old-price">$45.00</del>
                        </h3>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o empty" />
                        </div>
                        <h2 className="product-name">
                          <a
                            href="file:///C:/Users/usman/Desktop/e-shop/index.html#"
                            tabIndex={-1}
                          >
                            Product Name Goes Here
                          </a>
                        </h2>
                        <div className="product-btns">
                          <button className="main-btn icon-btn" tabIndex={-1}>
                            <i className="fa fa-heart" />
                          </button>
                          <button className="main-btn icon-btn" tabIndex={-1}>
                            <i className="fa fa-exchange" />
                          </button>
                          <button
                            className="primary-btn add-to-cart"
                            tabIndex={-1}
                          >
                            <i className="fa fa-shopping-cart" /> Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product product-single slick-slide slick-cloned"
                      tabIndex={-1}
                      role="tabpanel"
                      aria-describedby="slick-slide-control11"
                      style={{ width: 263 }}
                      data-slick-index={6}
                      aria-hidden="true"
                    >
                      <div className="product-thumb">
                        <div className="product-label">
                          <span>New</span>
                          <span className="sale">-20%</span>
                        </div>
                        <ul className="product-countdown">
                          <li>
                            <span>00 H</span>
                          </li>
                          <li>
                            <span>00 M</span>
                          </li>
                          <li>
                            <span>00 S</span>
                          </li>
                        </ul>
                        <button className="main-btn quick-view" tabIndex={-1}>
                          <i className="fa fa-search-plus" /> Quick view
                        </button>
                        <img src={product6} alt="" />
                      </div>
                      <div className="product-body">
                        <h3 className="product-price">
                          $32.50 <del className="product-old-price">$45.00</del>
                        </h3>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o empty" />
                        </div>
                        <h2 className="product-name">
                          <a
                            href="file:///C:/Users/usman/Desktop/e-shop/index.html#"
                            tabIndex={-1}
                          >
                            Product Name Goes Here
                          </a>
                        </h2>
                        <div className="product-btns">
                          <button className="main-btn icon-btn" tabIndex={-1}>
                            <i className="fa fa-heart" />
                          </button>
                          <button className="main-btn icon-btn" tabIndex={-1}>
                            <i className="fa fa-exchange" />
                          </button>
                          <button
                            className="primary-btn add-to-cart"
                            tabIndex={-1}
                          >
                            <i className="fa fa-shopping-cart" /> Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="product product-single slick-slide slick-cloned"
                      tabIndex={-1}
                      role="tabpanel"
                      style={{ width: 263 }}
                      data-slick-index={7}
                      aria-hidden="true"
                    >
                      <div className="product-thumb">
                        <div className="product-label">
                          <span>New</span>
                          <span className="sale">-20%</span>
                        </div>
                        <ul className="product-countdown">
                          <li>
                            <span>00 H</span>
                          </li>
                          <li>
                            <span>00 M</span>
                          </li>
                          <li>
                            <span>00 S</span>
                          </li>
                        </ul>
                        <button className="main-btn quick-view" tabIndex={-1}>
                          <i className="fa fa-search-plus" /> Quick view
                        </button>
                        <img src={product2} alt="" />
                      </div>
                      <div className="product-body">
                        <h3 className="product-price">
                          $32.50 <del className="product-old-price">$45.00</del>
                        </h3>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o empty" />
                        </div>
                        <h2 className="product-name">
                          <a
                            href="file:///C:/Users/usman/Desktop/e-shop/index.html#"
                            tabIndex={-1}
                          >
                            Product Name Goes Here
                          </a>
                        </h2>
                        <div className="product-btns">
                          <button className="main-btn icon-btn" tabIndex={-1}>
                            <i className="fa fa-heart" />
                          </button>
                          <button className="main-btn icon-btn" tabIndex={-1}>
                            <i className="fa fa-exchange" />
                          </button>
                          <button
                            className="primary-btn add-to-cart"
                            tabIndex={-1}
                          >
                            <i className="fa fa-shopping-cart" /> Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Product Slick */}
        </div>
        {/* /row */}
        {/* row */}
        
        {/* /row */}
      </div>
      {/* /container */}
    </div>
  );
}