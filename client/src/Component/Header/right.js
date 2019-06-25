import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Icon, Button } from 'semantic-ui-react'
import { logout } from '../../store/Action/userAction';
import { withRouter, Link } from 'react-router-dom'

class Right extends Component {
    LogoutHandler = () => {
        this.props.logout();
        this.props.history.push('/login');
    }
    render() {
        const { user } = this.props;
        return (
            <div className="pull-right">
                <ul className="header-btns">
                    {/* Account */}
                    <li className="header-account dropdown default-dropdown">
                        <div
                            className="dropdown-toggle"
                            role="button"
                            data-toggle="dropdown"
                            aria-expanded="true"
                        >
                            <div className="header-btns-icon">
                                <i className="fa fa-user-o" />
                            </div>
                            <strong className="text-uppercase">
                                {user.username ? `${user.username} ` : 'My Account'} <i className="fa fa-caret-down" />
                            </strong>
                        </div>
                        {!Object.entries(user).length > 0 && (
                            <div>
                                <a
                                    href="/login"
                                    className="text-uppercase"
                                >
                                    Login
</a>{" "} /{" "}
                                <a
                                    href="/register"
                                    className="text-uppercase"
                                >
                                    Join
</a>
                            </div>
                        )}


                        <ul className="custom-menu">
                            {!!Object.entries(this.props.user).length && (<li>
                                <Link to="/dashboard">
                                    <i className="fa fa-user-o" /> Dashboard
                                </Link>
                            </li>)}
                            <li>
                                <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                                    <i className="fa fa-heart-o" /> My Wishlist
    </a>
                            </li>
                            <li>
                                <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                                    <i className="fa fa-check" /> Checkout
    </a>
                            </li>
                            <li>
                                {
                                    !!Object.entries(user).length &&
                                    <Button onClick={this.LogoutHandler}>
                                        <Icon name="lock" /> Logout
                                </Button>
                                }
                            </li>
                        </ul>
                    </li>
                    {/* /Account */}
                    {/* Cart */}
                    <li className="header-cart dropdown default-dropdown">
                        <a
                            href="/"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="true"
                        >
                            <div className="header-btns-icon">
                                <i className="fa fa-shopping-cart" />
                                <span className="qty">3</span>
                            </div>
                            <strong className="text-uppercase">My Cart:</strong>
                            <br />
                            <span>35.20$</span>
                        </a>
                        <div className="custom-menu">
                            <div id="shopping-cart">
                                <div className="shopping-cart-list">
                                    <div className="product product-widget">
                                        <div className="product-thumb">
                                            <img
                                                src="file:///C:/Users/usman/Desktop/e-shop/img/thumb-product01.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="product-body">
                                            <h3 className="product-price">
                                                $32.50 <span className="qty">x3</span>
                                            </h3>
                                            <h2 className="product-name">
                                                <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                                                    Product Name Goes Here
            </a>
                                            </h2>
                                        </div>
                                        <button className="cancel-btn">
                                            <i className="fa fa-trash" />
                                        </button>
                                    </div>
                                    <div className="product product-widget">
                                        <div className="product-thumb">
                                            <img
                                                src="file:///C:/Users/usman/Desktop/e-shop/img/thumb-product01.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="product-body">
                                            <h3 className="product-price">
                                                $32.50 <span className="qty">x3</span>
                                            </h3>
                                            <h2 className="product-name">
                                                <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                                                    Product Name Goes Here
            </a>
                                            </h2>
                                        </div>
                                        <button className="cancel-btn">
                                            <i className="fa fa-trash" />
                                        </button>
                                    </div>
                                </div>
                                <div className="shopping-cart-btns">
                                    <button className="main-btn">View Cart</button>
                                    <button className="primary-btn">
                                        Checkout <i className="fa fa-arrow-circle-right" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* /Cart */}
                    {/* Mobile nav toggle*/}
                    <li className="nav-toggle">
                        <button className="nav-toggle-btn main-btn icon-btn" onClick={this.props.toogleSideBar}>
                            <i className="fa fa-bars" />
                        </button>
                    </li>
                    {/* / Mobile nav toggle */}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user
    }
}
export default withRouter(connect(mapStateToProps, { logout })(Right));
