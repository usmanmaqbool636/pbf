import React, { Component } from 'react'
import Aside from './aside/Aside';

class ProductPage extends Component {
    render() {
        return (
            <div className="section">
                {/* container */}
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <Aside />
                        {/* MAIN */}
                        <div id="main" className="col-md-9">
                            {/* store top filter */}
                            <div className="store-filter clearfix">
                                <div className="pull-left">
                                    <div className="row-filter">
                                        <a href="#">
                                            <i className="fa fa-th-large" />
                                        </a>
                                        <a href="#" className="active">
                                            <i className="fa fa-bars" />
                                        </a>
                                    </div>
                                    <div className="sort-filter">
                                        <span className="text-uppercase">Sort By:</span>
                                        <select className="input">
                                            <option value={0}>Position</option>
                                            <option value={0}>Price</option>
                                            <option value={0}>Rating</option>
                                        </select>
                                        <a href="#" className="main-btn icon-btn">
                                            <i className="fa fa-arrow-down" />
                                        </a>
                                    </div>
                                </div>
                                <div className="pull-right">
                                    <div className="page-filter">
                                        <span className="text-uppercase">Show:</span>
                                        <select className="input">
                                            <option value={0}>10</option>
                                            <option value={1}>20</option>
                                            <option value={2}>30</option>
                                        </select>
                                    </div>
                                    <ul className="store-pages">
                                        <li>
                                            <span className="text-uppercase">Page:</span>
                                        </li>
                                        <li className="active">1</li>
                                        <li>
                                            <a href="#">2</a>
                                        </li>
                                        <li>
                                            <a href="#">3</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-caret-right" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* /store top filter */}
                            {/* STORE */}
                            <div id="store">
                                {/* row */}
                                <div className="row">
                                    {/* Product Single */}
                                    <div className="col-md-4 col-sm-6 col-xs-6">
                                        <div className="product product-single">
                                            <div className="product-thumb">
                                                <div className="product-label">
                                                    <span>New</span>
                                                    <span className="sale">-20%</span>
                                                </div>
                                                <button className="main-btn quick-view">
                                                    <i className="fa fa-search-plus" /> Quick view
                  </button>
                                                <img src="./img/product01.jpg" alt />
                                            </div>
                                            <div className="product-body">
                                                <h3 className="product-price">
                                                    $32.50{" "}
                                                    <del className="product-old-price">$45.00</del>
                                                </h3>
                                                <div className="product-rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-o empty" />
                                                </div>
                                                <h2 className="product-name">
                                                    <a href="#">Product Name Goes Here</a>
                                                </h2>
                                                <div className="product-btns">
                                                    <button className="main-btn icon-btn">
                                                        <i className="fa fa-heart" />
                                                    </button>
                                                    <button className="main-btn icon-btn">
                                                        <i className="fa fa-exchange" />
                                                    </button>
                                                    <button className="primary-btn add-to-cart">
                                                        <i className="fa fa-shopping-cart" /> Add to
                                                        Cart
                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Product Single */}
                                    {/* Product Single */}
                                    <div className="col-md-4 col-sm-6 col-xs-6">
                                        <div className="product product-single">
                                            <div className="product-thumb">
                                                <button className="main-btn quick-view">
                                                    <i className="fa fa-search-plus" /> Quick view
                  </button>
                                                <img src="./img/product02.jpg" alt />
                                            </div>
                                            <div className="product-body">
                                                <h3 className="product-price">$32.50</h3>
                                                <div className="product-rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-o empty" />
                                                </div>
                                                <h2 className="product-name">
                                                    <a href="#">Product Name Goes Here</a>
                                                </h2>
                                                <div className="product-btns">
                                                    <button className="main-btn icon-btn">
                                                        <i className="fa fa-heart" />
                                                    </button>
                                                    <button className="main-btn icon-btn">
                                                        <i className="fa fa-exchange" />
                                                    </button>
                                                    <button className="primary-btn add-to-cart">
                                                        <i className="fa fa-shopping-cart" /> Add to
                                                        Cart
                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Product Single */}
                                    <div className="clearfix visible-sm visible-xs" />
                                    {/* Product Single */}
                                    <div className="col-md-4 col-sm-6 col-xs-6">
                                        <div className="product product-single">
                                            <div className="product-thumb">
                                                <div className="product-label">
                                                    <span>New</span>
                                                    <span className="sale">-20%</span>
                                                </div>
                                                <button className="main-btn quick-view">
                                                    <i className="fa fa-search-plus" /> Quick view
                  </button>
                                                <img src="./img/product03.jpg" alt />
                                            </div>
                                            <div className="product-body">
                                                <h3 className="product-price">
                                                    $32.50{" "}
                                                    <del className="product-old-price">$45.00</del>
                                                </h3>
                                                <div className="product-rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-o empty" />
                                                </div>
                                                <h2 className="product-name">
                                                    <a href="#">Product Name Goes Here</a>
                                                </h2>
                                                <div className="product-btns">
                                                    <button className="main-btn icon-btn">
                                                        <i className="fa fa-heart" />
                                                    </button>
                                                    <button className="main-btn icon-btn">
                                                        <i className="fa fa-exchange" />
                                                    </button>
                                                    <button className="primary-btn add-to-cart">
                                                        <i className="fa fa-shopping-cart" /> Add to
                                                        Cart
                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Product Single */}
                                    <div className="clearfix visible-md visible-lg" />
                                    {/* Product Single */}
                                    <div className="col-md-4 col-sm-6 col-xs-6">
                                        <div className="product product-single">
                                            <div className="product-thumb">
                                                <div className="product-label">
                                                    <span>New</span>
                                                </div>
                                                <button className="main-btn quick-view">
                                                    <i className="fa fa-search-plus" /> Quick view
                  </button>
                                                <img src="./img/product04.jpg" alt />
                                            </div>
                                            <div className="product-body">
                                                <h3 className="product-price">$32.50</h3>
                                                <div className="product-rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-o empty" />
                                                </div>
                                                <h2 className="product-name">
                                                    <a href="#">Product Name Goes Here</a>
                                                </h2>
                                                <div className="product-btns">
                                                    <button className="main-btn icon-btn">
                                                        <i className="fa fa-heart" />
                                                    </button>
                                                    <button className="main-btn icon-btn">
                                                        <i className="fa fa-exchange" />
                                                    </button>
                                                    <button className="primary-btn add-to-cart">
                                                        <i className="fa fa-shopping-cart" /> Add to
                                                        Cart
                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Product Single */}
                                    <div className="clearfix visible-sm visible-xs" />
                                    {/* Product Single */}
                                    <div className="col-md-4 col-sm-6 col-xs-6">
                                        <div className="product product-single">
                                            <div className="product-thumb">
                                                <div className="product-label">
                                                    <span>New</span>
                                                </div>
                                                <button className="main-btn quick-view">
                                                    <i className="fa fa-search-plus" /> Quick view
                  </button>
                                                <img src="./img/product05.jpg" alt />
                                            </div>
                                            <div className="product-body">
                                                <h3 className="product-price">$32.50</h3>
                                                <div className="product-rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-o empty" />
                                                </div>
                                                <h2 className="product-name">
                                                    <a href="#">Product Name Goes Here</a>
                                                </h2>
                                                <div className="product-btns">
                                                    <button className="main-btn icon-btn">
                                                        <i className="fa fa-heart" />
                                                    </button>
                                                    <button className="main-btn icon-btn">
                                                        <i className="fa fa-exchange" />
                                                    </button>
                                                    <button className="primary-btn add-to-cart">
                                                        <i className="fa fa-shopping-cart" /> Add to
                                                        Cart
                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Product Single */}
                                    {/* Product Single */}
                                    <div className="col-md-4 col-sm-6 col-xs-6">
                                        <div className="product product-single">
                                            <div className="product-thumb">
                                                <div className="product-label">
                                                    <span>New</span>
                                                    <span className="sale">-20%</span>
                                                </div>
                                                <button className="main-btn quick-view">
                                                    <i className="fa fa-search-plus" /> Quick view
                  </button>
                                                <img src="./img/product06.jpg" alt />
                                            </div>
                                            <div className="product-body">
                                                <h3 className="product-price">
                                                    $32.50{" "}
                                                    <del className="product-old-price">$45.00</del>
                                                </h3>
                                                <div className="product-rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-o empty" />
                                                </div>
                                                <h2 className="product-name">
                                                    <a href="#">Product Name Goes Here</a>
                                                </h2>
                                                <div className="product-btns">
                                                    <button className="main-btn icon-btn">
                                                        <i className="fa fa-heart" />
                                                    </button>
                                                    <button className="main-btn icon-btn">
                                                        <i className="fa fa-exchange" />
                                                    </button>
                                                    <button className="primary-btn add-to-cart">
                                                        <i className="fa fa-shopping-cart" /> Add to
                                                        Cart
                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Product Single */}
                                    <div className="clearfix visible-md visible-lg visible-sm visible-xs" />
                                    {/* Product Single */}
                                    <div className="col-md-4 col-sm-6 col-xs-6">
                                        <div className="product product-single">
                                            <div className="product-thumb">
                                                <div className="product-label">
                                                    <span>New</span>
                                                    <span className="sale">-20%</span>
                                                </div>
                                                <button className="main-btn quick-view">
                                                    <i className="fa fa-search-plus" /> Quick view
                  </button>
                                                <img src="./img/product07.jpg" alt />
                                            </div>
                                            <div className="product-body">
                                                <h3 className="product-price">
                                                    $32.50{" "}
                                                    <del className="product-old-price">$45.00</del>
                                                </h3>
                                                <div className="product-rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-o empty" />
                                                </div>
                                                <h2 className="product-name">
                                                    <a href="#">Product Name Goes Here</a>
                                                </h2>
                                                <div className="product-btns">
                                                    <button className="main-btn icon-btn">
                                                        <i className="fa fa-heart" />
                                                    </button>
                                                    <button className="main-btn icon-btn">
                                                        <i className="fa fa-exchange" />
                                                    </button>
                                                    <button className="primary-btn add-to-cart">
                                                        <i className="fa fa-shopping-cart" /> Add to
                                                        Cart
                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Product Single */}
                                    {/* Product Single */}
                                    <div className="col-md-4 col-sm-6 col-xs-6">
                                        <div className="product product-single">
                                            <div className="product-thumb">
                                                <button className="main-btn quick-view">
                                                    <i className="fa fa-search-plus" /> Quick view
                  </button>
                                                <img src="./img/product08.jpg" alt />
                                            </div>
                                            <div className="product-body">
                                                <h3 className="product-price">$32.50</h3>
                                                <div className="product-rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-o empty" />
                                                </div>
                                                <h2 className="product-name">
                                                    <a href="#">Product Name Goes Here</a>
                                                </h2>
                                                <div className="product-btns">
                                                    <button className="main-btn icon-btn">
                                                        <i className="fa fa-heart" />
                                                    </button>
                                                    <button className="main-btn icon-btn">
                                                        <i className="fa fa-exchange" />
                                                    </button>
                                                    <button className="primary-btn add-to-cart">
                                                        <i className="fa fa-shopping-cart" /> Add to
                                                        Cart
                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Product Single */}
                                    <div className="clearfix visible-sm visible-xs" />
                                    {/* Product Single */}
                                    <div className="col-md-4 col-sm-6 col-xs-6">
                                        <div className="product product-single">
                                            <div className="product-thumb">
                                                <div className="product-label">
                                                    <span className="sale">-20%</span>
                                                </div>
                                                <button className="main-btn quick-view">
                                                    <i className="fa fa-search-plus" /> Quick view
                  </button>
                                                <img src="./img/product01.jpg" alt />
                                            </div>
                                            <div className="product-body">
                                                <h3 className="product-price">
                                                    $32.50{" "}
                                                    <del className="product-old-price">$45.00</del>
                                                </h3>
                                                <div className="product-rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star-o empty" />
                                                </div>
                                                <h2 className="product-name">
                                                    <a href="#">Product Name Goes Here</a>
                                                </h2>
                                                <div className="product-btns">
                                                    <button className="main-btn icon-btn">
                                                        <i className="fa fa-heart" />
                                                    </button>
                                                    <button className="main-btn icon-btn">
                                                        <i className="fa fa-exchange" />
                                                    </button>
                                                    <button className="primary-btn add-to-cart">
                                                        <i className="fa fa-shopping-cart" /> Add to
                                                        Cart
                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Product Single */}
                                </div>
                                {/* /row */}
                            </div>
                            {/* /STORE */}
                            {/* store bottom filter */}
                            <div className="store-filter clearfix">
                                <div className="pull-left">
                                    <div className="row-filter">
                                        <a href="#">
                                            <i className="fa fa-th-large" />
                                        </a>
                                        <a href="#" className="active">
                                            <i className="fa fa-bars" />
                                        </a>
                                    </div>
                                    <div className="sort-filter">
                                        <span className="text-uppercase">Sort By:</span>
                                        <select className="input">
                                            <option value={0}>Position</option>
                                            <option value={0}>Price</option>
                                            <option value={0}>Rating</option>
                                        </select>
                                        <a href="#" className="main-btn icon-btn">
                                            <i className="fa fa-arrow-down" />
                                        </a>
                                    </div>
                                </div>
                                <div className="pull-right">
                                    <div className="page-filter">
                                        <span className="text-uppercase">Show:</span>
                                        <select className="input">
                                            <option value={0}>10</option>
                                            <option value={1}>20</option>
                                            <option value={2}>30</option>
                                        </select>
                                    </div>
                                    <ul className="store-pages">
                                        <li>
                                            <span className="text-uppercase">Page:</span>
                                        </li>
                                        <li className="active">1</li>
                                        <li>
                                            <a href="#">2</a>
                                        </li>
                                        <li>
                                            <a href="#">3</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-caret-right" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* /store bottom filter */}
                        </div>
                        {/* /MAIN */}
                    </div>
                    {/* /row */}
                </div>
                {/* /container */}
            </div>

        )
    }
}
export default ProductPage;