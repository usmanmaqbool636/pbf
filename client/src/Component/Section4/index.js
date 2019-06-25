import React from 'react'
import product1 from '../../Assests/img/product01.jpg'
import product2 from '../../Assests/img/product02.jpg'
import product3 from '../../Assests/img/product03.jpg'
import product4 from '../../Assests/img/product04.jpg'
import product5 from '../../Assests/img/product05.jpg'
import product6 from '../../Assests/img/product06.jpg'
import product7 from '../../Assests/img/product07.jpg'
import banner15 from '../../Assests/img/banner15.jpg';




export default function index() {
    return (

        <div className="section">
            {/* container */}
            <div className="container">
                {/* row */}
                <div className="row">
                    {/* section title */}
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2 className="title">Latest Products</h2>
                        </div>
                    </div>
                    {/* section title */}
                    {/* Product Single */}
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="product product-single">
                            <div className="product-thumb">
                                <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                                <img src={product1} alt="" />
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
                                <h2 className="product-name"><a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">Product Name Goes Here</a></h2>
                                <div className="product-btns">
                                    <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                                    <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                                    <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Product Single */}
                    {/* Product Single */}
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="product product-single">
                            <div className="product-thumb">
                                <div className="product-label">
                                    <span>New</span>
                                    <span className="sale">-20%</span>
                                </div>
                                <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>

                                <img src={product2} alt="" />
                            </div>
                            <div className="product-body">
                                <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                                <div className="product-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                </div>
                                <h2 className="product-name"><a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">Product Name Goes Here</a></h2>
                                <div className="product-btns">
                                    <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                                    <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                                    <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Product Single */}
                    {/* Product Single */}
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="product product-single">
                            <div className="product-thumb">
                                <div className="product-label">
                                    <span>New</span>
                                    <span className="sale">-20%</span>
                                </div>
                                <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>

                                <img src={product3} alt="" />
                            </div>
                            <div className="product-body">
                                <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                                <div className="product-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                </div>
                                <h2 className="product-name"><a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">Product Name Goes Here</a></h2>
                                <div className="product-btns">
                                    <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                                    <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                                    <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Product Single */}
                    {/* Product Single */}
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="product product-single">
                            <div className="product-thumb">
                                <div className="product-label">
                                    <span>New</span>
                                </div>
                                <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>

                                <img src={product4} alt="" />
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
                                <h2 className="product-name"><a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">Product Name Goes Here</a></h2>
                                <div className="product-btns">
                                    <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                                    <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                                    <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Product Single */}
                </div>
                {/* /row */}
                {/* row */}
                <div className="row">
                    {/* banner */}
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="banner banner-2">
                            <img src={banner15} alt="" />
                            <div className="banner-caption">
                                <h2 className="white-color">NEW<br />COLLECTION</h2>
                                <button className="primary-btn">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    {/* /banner */}
                    {/* Product Single */}
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="product product-single">
                            <div className="product-thumb">
                                <div className="product-label">
                                    <span>New</span>
                                    <span className="sale">-20%</span>
                                </div>
                                <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                                <img src={product7} alt="" />
                            </div>
                            <div className="product-body">
                                    <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                                <div className="product-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                </div>
                                <h2 className="product-name"><a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">Product Name Goes Here</a></h2>
                                <div className="product-btns">
                                    <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                                    <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                                    <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Product Single */}
                    {/* Product Single */}
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="product product-single">
                            <div className="product-thumb">
                                <div className="product-label">
                                    <span>New</span>
                                    <span className="sale">-20%</span>
                                </div>
                                <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                                <img src={product6} alt="" />
                            </div>
                            <div className="product-body">
                                <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                                <div className="product-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                </div>
                                <h2 className="product-name"><a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">Product Name Goes Here</a></h2>
                                <div className="product-btns">
                                    <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                                    <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                                    <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Product Single */}
                    {/* Product Single */}
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="product product-single">
                            <div className="product-thumb">
                                <div className="product-label">
                                    <span>New</span>
                                    <span className="sale">-20%</span>
                                </div>
                                <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                                <img src={product5} alt="" />
                            </div>
                            <div className="product-body">
                                <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                                <div className="product-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                </div>
                                <h2 className="product-name"><a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">Product Name Goes Here</a></h2>
                                <div className="product-btns">
                                    <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                                    <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                                    <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Product Single */}
                </div>
                {/* /row */}
                {/* row */}
                <div className="row">
                    {/* section title */}
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2 className="title">Picked For You</h2>
                        </div>
                    </div>
                    {/* section title */}
                    {/* Product Single */}
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="product product-single">
                            <div className="product-thumb">
                                <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                                <img src={product4} alt="" />
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
                                <h2 className="product-name"><a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">Product Name Goes Here</a></h2>
                                <div className="product-btns">
                                    <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                                    <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                                    <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Product Single */}
                    {/* Product Single */}
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="product product-single">
                            <div className="product-thumb">
                                <div className="product-label">
                                    <span>New</span>
                                </div>
                                <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                                <img src={product3} alt="" />
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
                                <h2 className="product-name"><a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">Product Name Goes Here</a></h2>
                                <div className="product-btns">
                                    <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                                    <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                                    <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Product Single */}
                    {/* Product Single */}
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="product product-single">
                            <div className="product-thumb">
                                <div className="product-label">
                                    <span className="sale">-20%</span>
                                </div>
                                <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                                <img src={product2} alt="" />
                            </div>
                            <div className="product-body">
                                <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                                <div className="product-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                </div>
                                <h2 className="product-name"><a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">Product Name Goes Here</a></h2>
                                <div className="product-btns">
                                    <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                                    <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                                    <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Product Single */}
                    {/* Product Single */}
                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="product product-single">
                            <div className="product-thumb">
                                <div className="product-label">
                                    <span>New</span>
                                    <span className="sale">-20%</span>
                                </div>
                                <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                                <img src={product1} alt="" />
                            </div>
                            <div className="product-body">
                                <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                                <div className="product-rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o empty" />
                                </div>
                                <h2 className="product-name"><a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">Product Name Goes Here</a></h2>
                                <div className="product-btns">
                                    <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                                    <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                                    <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Product Single */}
                </div>
                {/* /row */}
            </div>
            {/* /container */}
        </div>
    )
}
