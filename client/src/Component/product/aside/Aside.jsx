import React from 'react'

export default function aside() {
    return (
        <div id="aside" className="col-md-3">
            {/* aside widget */}
            <div className="aside">
                <h3 className="aside-title">Shop by:</h3>
                <ul className="filter-list">
                    <li>
                        <span className="text-uppercase">color:</span>
                    </li>
                    <li>
                        <a
                            href="#"
                            style={{ color: "#FFF", backgroundColor: "#8A2454" }}
                        >
                            Camelot
            </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            style={{ color: "#FFF", backgroundColor: "#475984" }}
                        >
                            East Bay
            </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            style={{ color: "#FFF", backgroundColor: "#BF6989" }}
                        >
                            Tapestry
            </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            style={{ color: "#FFF", backgroundColor: "#9A54D8" }}
                        >
                            Medium Purple
            </a>
                    </li>
                </ul>
                <ul className="filter-list">
                    <li>
                        <span className="text-uppercase">Size:</span>
                    </li>
                    <li>
                        <a href="#">X</a>
                    </li>
                    <li>
                        <a href="#">XL</a>
                    </li>
                </ul>
                <ul className="filter-list">
                    <li>
                        <span className="text-uppercase">Price:</span>
                    </li>
                    <li>
                        <a href="#">MIN: $20.00</a>
                    </li>
                    <li>
                        <a href="#">MAX: $120.00</a>
                    </li>
                </ul>
                <ul className="filter-list">
                    <li>
                        <span className="text-uppercase">Gender:</span>
                    </li>
                    <li>
                        <a href="#">Men</a>
                    </li>
                </ul>
                <button className="primary-btn">Clear All</button>
            </div>
            {/* /aside widget */}
            {/* aside widget */}
            <div className="aside">
                <h3 className="aside-title">Filter by Price</h3>
                <div id="price-slider" />
            </div>
            {/* aside widget */}
            {/* aside widget */}
            <div className="aside">
                <h3 className="aside-title">Filter By Color:</h3>
                <ul className="color-option">
                    <li>
                        <a href="#" style={{ backgroundColor: "#475984" }} />
                    </li>
                    <li>
                        <a href="#" style={{ backgroundColor: "#8A2454" }} />
                    </li>
                    <li className="active">
                        <a href="#" style={{ backgroundColor: "#BF6989" }} />
                    </li>
                    <li>
                        <a href="#" style={{ backgroundColor: "#9A54D8" }} />
                    </li>
                    <li>
                        <a href="#" style={{ backgroundColor: "#675F52" }} />
                    </li>
                    <li>
                        <a href="#" style={{ backgroundColor: "#050505" }} />
                    </li>
                    <li>
                        <a href="#" style={{ backgroundColor: "#D5B47B" }} />
                    </li>
                </ul>
            </div>
            {/* /aside widget */}
            {/* aside widget */}
            <div className="aside">
                <h3 className="aside-title">Filter By Size:</h3>
                <ul className="size-option">
                    <li className="active">
                        <a href="#">S</a>
                    </li>
                    <li className="active">
                        <a href="#">XL</a>
                    </li>
                    <li>
                        <a href="#">SL</a>
                    </li>
                </ul>
            </div>
            {/* /aside widget */}
            {/* aside widget */}
            <div className="aside">
                <h3 className="aside-title">Filter by Brand</h3>
                <ul className="list-links">
                    <li>
                        <a href="#">Nike</a>
                    </li>
                    <li>
                        <a href="#">Adidas</a>
                    </li>
                    <li>
                        <a href="#">Polo</a>
                    </li>
                    <li>
                        <a href="#">Lacost</a>
                    </li>
                </ul>
            </div>
            {/* /aside widget */}
            {/* aside widget */}
            <div className="aside">
                <h3 className="aside-title">Filter by Gender</h3>
                <ul className="list-links">
                    <li className="active">
                        <a href="#">Men</a>
                    </li>
                    <li>
                        <a href="#">Women</a>
                    </li>
                </ul>
            </div>
            {/* /aside widget */}
            {/* aside widget */}
            <div className="aside">
                <h3 className="aside-title">Top Rated Product</h3>
                {/* widget product */}
                <div className="product product-widget">
                    <div className="product-thumb">
                        <img src="./img/thumb-product01.jpg" alt />
                    </div>
                    <div className="product-body">
                        <h2 className="product-name">
                            <a href="#">Product Name Goes Here</a>
                        </h2>
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
                    </div>
                </div>
                {/* /widget product */}
                {/* widget product */}
                <div className="product product-widget">
                    <div className="product-thumb">
                        <img src="./img/thumb-product01.jpg" alt />
                    </div>
                    <div className="product-body">
                        <h2 className="product-name">
                            <a href="#">Product Name Goes Here</a>
                        </h2>
                        <h3 className="product-price">$32.50</h3>
                        <div className="product-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-o empty" />
                        </div>
                    </div>
                </div>
                {/* /widget product */}
            </div>
            {/* /aside widget */}
        </div>
    )
}
