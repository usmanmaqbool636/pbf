import React, { Component } from "react";
import { connect } from 'react-redux';
// import { Icon, Button } from 'semantic-ui-react';
import { toogleSideBar } from '../../store/Action/responsiveAction';
class Navigation extends Component {
  state = {
    res_nav: false
  }
  render() {
    return (
      <div id="navigation" onClick={this.props.toogleSideBar}
      className={this.props.open ? "shadow" : ""}
      >
        {/* container */}
        < div className="container">
          <div id="responsive-nav" className={this.props.open ? "open" : ""}>
            {/* category nav */}
            <div className="category-nav">
              <span className="category-header">
                Categories <i className="fa fa-list" />
              </span>
              <ul className="category-list" 
              // style={{display:'none'}}
              >
                <li className="dropdown side-dropdown">
                  <a
                    href="/"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Women’s Clothing <i className="fa fa-angle-right" />
                  </a>
                  <div className="custom-menu">
                    <div className="row">
                      <div className="col-md-4">
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Women’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Men’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Phones &amp; Accessories
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Jewelry &amp; Watches
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Bags &amp; Shoes
                          </a>
                          </li>
                        </ul>
                        <hr className="hidden-md hidden-lg" />
                      </div>
                      <div className="col-md-4">
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Women’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Men’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Phones &amp; Accessories
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Jewelry &amp; Watches
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Bags &amp; Shoes
                          </a>
                          </li>
                        </ul>
                        <hr className="hidden-md hidden-lg" />
                      </div>
                      <div className="col-md-4">
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Women’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Men’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Phones &amp; Accessories
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Jewelry &amp; Watches
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Bags &amp; Shoes
                          </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row hidden-sm hidden-xs">
                      <div className="col-md-12">
                        <hr />
                        <a
                          className="banner banner-1"
                          href="file:///C:/Users/usman/Desktop/e-shop/index.html#"
                        >
                          <img
                            src="file:///C:/Users/usman/Desktop/e-shop/img/banner05.jpg"
                            alt=""
                          />
                          <div className="banner-caption text-center">
                            <h2 className="white-color">NEW COLLECTION</h2>
                            <h3 className="white-color font-weak">HOT DEAL</h3>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                    Men’s Clothing
                </a>
                </li>
                <li className="dropdown side-dropdown">
                  <a
                    href="/"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Phones &amp; Accessories <i className="fa fa-angle-right" />
                  </a>
                  <div className="custom-menu">
                    <div className="row">
                      <div className="col-md-4">
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Women’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Men’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Phones &amp; Accessories
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Jewelry &amp; Watches
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Bags &amp; Shoes
                          </a>
                          </li>
                        </ul>
                        <hr />
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Women’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Men’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Phones &amp; Accessories
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Jewelry &amp; Watches
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Bags &amp; Shoes
                          </a>
                          </li>
                        </ul>
                        <hr className="hidden-md hidden-lg" />
                      </div>
                      <div className="col-md-4">
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Women’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Men’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Phones &amp; Accessories
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Jewelry &amp; Watches
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Bags &amp; Shoes
                          </a>
                          </li>
                        </ul>
                        <hr />
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Women’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Men’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Phones &amp; Accessories
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Jewelry &amp; Watches
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Bags &amp; Shoes
                          </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4 hidden-sm hidden-xs">
                        <a
                          className="banner banner-2"
                          href="file:///C:/Users/usman/Desktop/e-shop/index.html#"
                        >
                          <img
                            src="file:///C:/Users/usman/Desktop/e-shop/img/banner04.jpg"
                            alt=""
                          />
                          <div className="banner-caption">
                            <h3 className="white-color">
                              NEW
                            <br />
                              COLLECTION
                          </h3>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                    Computer &amp; Office
                </a>
                </li>
                <li>
                  <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                    Consumer Electronics
                </a>
                </li>
                <li className="dropdown side-dropdown">
                  <a
                    href="/"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Jewelry &amp; Watches <i className="fa fa-angle-right" />
                  </a>
                  <div className="custom-menu">
                    <div className="row">
                      <div className="col-md-4">
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Women’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Men’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Phones &amp; Accessories
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Jewelry &amp; Watches
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Bags &amp; Shoes
                          </a>
                          </li>
                        </ul>
                        <hr />
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Women’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Men’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Phones &amp; Accessories
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Jewelry &amp; Watches
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Bags &amp; Shoes
                          </a>
                          </li>
                        </ul>
                        <hr className="hidden-md hidden-lg" />
                      </div>
                      <div className="col-md-4">
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Women’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Men’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Phones &amp; Accessories
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Jewelry &amp; Watches
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Bags &amp; Shoes
                          </a>
                          </li>
                        </ul>
                        <hr />
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Women’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Men’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Phones &amp; Accessories
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Jewelry &amp; Watches
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Bags &amp; Shoes
                          </a>
                          </li>
                        </ul>
                        <hr className="hidden-md hidden-lg" />
                      </div>
                      <div className="col-md-4">
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Women’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Men’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Phones &amp; Accessories
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Jewelry &amp; Watches
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Bags &amp; Shoes
                          </a>
                          </li>
                        </ul>
                        <hr />
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Women’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Men’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Phones &amp; Accessories
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Jewelry &amp; Watches
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Bags &amp; Shoes
                          </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                    Bags &amp; Shoes
                </a>
                </li>
                <li>
                  <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                    View All
                </a>
                </li>
              </ul>
            </div>
            {/* /category nav */}
            {/* menu nav */}
            <div className="menu-nav">
              <span className="menu-header">
                Menu <i className="fa fa-bars" />
              </span>
              <ul className="menu-list">
                <li>
                  <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                    Home
                </a>
                </li>
                <li>
                  <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                    Shop
                </a>
                </li>
                <li className="dropdown mega-dropdown">
                  <a
                    href="/"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Women <i className="fa fa-caret-down" />
                  </a>
                  <div className="custom-menu">
                    <div className="row">
                      <div className="col-md-4">
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Women’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Men’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Phones &amp; Accessories
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Jewelry &amp; Watches
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Bags &amp; Shoes
                          </a>
                          </li>
                        </ul>
                        <hr className="hidden-md hidden-lg" />
                      </div>
                      <div className="col-md-4">
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Women’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Men’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Phones &amp; Accessories
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Jewelry &amp; Watches
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Bags &amp; Shoes
                          </a>
                          </li>
                        </ul>
                        <hr className="hidden-md hidden-lg" />
                      </div>
                      <div className="col-md-4">
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Women’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Men’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Phones &amp; Accessories
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Jewelry &amp; Watches
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Bags &amp; Shoes
                          </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row hidden-sm hidden-xs">
                      <div className="col-md-12">
                        <hr />
                        <a
                          className="banner banner-1"
                          href="file:///C:/Users/usman/Desktop/e-shop/index.html#"
                        >
                          <img
                            src="file:///C:/Users/usman/Desktop/e-shop/img/banner05.jpg"
                            alt=""
                          />
                          <div className="banner-caption text-center">
                            <h2 className="white-color">NEW COLLECTION</h2>
                            <h3 className="white-color font-weak">HOT DEAL</h3>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="dropdown mega-dropdown full-width">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="true"
                    href="/"
                  >
                    Men <i className="fa fa-caret-down" />
                  </a>
                  <div className="custom-menu">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="hidden-sm hidden-xs">
                          <a
                            className="banner banner-1"
                            href="file:///C:/Users/usman/Desktop/e-shop/index.html#"
                          >
                            <img
                              src="file:///C:/Users/usman/Desktop/e-shop/img/banner06.jpg"
                              alt=""
                            />
                            <div className="banner-caption text-center">
                              <h3 className="white-color text-uppercase">
                                Women’s
                            </h3>
                            </div>
                          </a>
                          <hr />
                        </div>
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Women’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Men’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Phones &amp; Accessories
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Jewelry &amp; Watches
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Bags &amp; Shoes
                          </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <div className="hidden-sm hidden-xs">
                          <a
                            className="banner banner-1"
                            href="file:///C:/Users/usman/Desktop/e-shop/index.html#"
                          >
                            <img
                              src="file:///C:/Users/usman/Desktop/e-shop/img/banner07.jpg"
                              alt=""
                            />
                            <div className="banner-caption text-center">
                              <h3 className="white-color text-uppercase">
                                Men’s
                            </h3>
                            </div>
                          </a>
                        </div>
                        <hr />
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Women’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Men’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Phones &amp; Accessories
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Jewelry &amp; Watches
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Bags &amp; Shoes
                          </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <div className="hidden-sm hidden-xs">
                          <a
                            className="banner banner-1"
                            href="file:///C:/Users/usman/Desktop/e-shop/index.html#"
                          >
                            <img
                              src="file:///C:/Users/usman/Desktop/e-shop/img/banner08.jpg"
                              alt=""
                            />
                            <div className="banner-caption text-center">
                              <h3 className="white-color text-uppercase">
                                Accessories
                            </h3>
                            </div>
                          </a>
                        </div>
                        <hr />
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Women’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Men’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Phones &amp; Accessories
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Jewelry &amp; Watches
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Bags &amp; Shoes
                          </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <div className="hidden-sm hidden-xs">
                          <a
                            className="banner banner-1"
                            href="file:///C:/Users/usman/Desktop/e-shop/index.html#"
                          >
                            <img
                              src="file:///C:/Users/usman/Desktop/e-shop/img/banner09.jpg"
                              alt=""
                            />
                            <div className="banner-caption text-center">
                              <h3 className="white-color text-uppercase">Bags</h3>
                            </div>
                          </a>
                        </div>
                        <hr />
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Women’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Men’s Clothing
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Phones &amp; Accessories
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Jewelry &amp; Watches
                          </a>
                          </li>
                          <li>
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                              Bags &amp; Shoes
                          </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                    Sales
                </a>
                </li>
                <li className="dropdown default-dropdown">
                  <a
                    href="/"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Pages <i className="fa fa-caret-down" />
                  </a>
                  <ul className="custom-menu">
                    <li>
                      <a href="file:///C:/Users/usman/Desktop/e-shop/index.html">
                        Home
                    </a>
                    </li>
                    <li>
                      <a href="file:///C:/Users/usman/Desktop/e-shop/products.html">
                        Products
                    </a>
                    </li>
                    <li>
                      <a href="file:///C:/Users/usman/Desktop/e-shop/product-page.html">
                        Product Details
                    </a>
                    </li>
                    <li>
                      <a href="file:///C:/Users/usman/Desktop/e-shop/checkout.html">
                        Checkout
                    </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* menu nav */}
            {/* <div style={{ backgroundColor: 'red', zIndex: 100,height:"100%",width:"100%" }}></div> */}
          </div>
        </div>
        {/* /container */}
      </div >
    );
  }
}
const mapStateToProps = (state) => {
  return {
    open: state.responsive.sidebar
  }
}
export default connect(mapStateToProps, { toogleSideBar })(Navigation);
