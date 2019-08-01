import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Icon, Button } from 'semantic-ui-react'
import { logout } from '../../store/Action/userAction';
import { withRouter, Link } from 'react-router-dom'
import axios from '../../axios';
import firebase from '../../firebase';
import jwt from 'jsonwebtoken';
import { deleteFromCart, inserInCart } from '../../store/Action/cartAction';
class Right extends Component {

    state = {
        cart: []
    }
    componentDidMount() {
        const token = localStorage.getItem("token");
        if (token) {
            const user = jwt.decode(token.split(" ")[1]);
            user.token = token;
            const headers = { Authorization: token };
            axios.get(`api/user/cart/${user._id}`, { headers })
                .then(res => {
                    this.setState({ cart: res.data[0].cart || 0 })
                    this.props.inserInCart(res.data[0].cart)
                })
        }
    }
    loadImages = (ImageUrl, _id) => {
        const storageRef = firebase.storage().ref(`/products`);
        storageRef.child(`/${ImageUrl}.jpg`).getDownloadURL().then((url) => {
            document.getElementById(_id).src = url;

        })
    }
    LogoutHandler = () => {
        this.props.logout();
        this.props.history.push('/login');
    }
    deleteFromCart = (_id) => {
        const token = localStorage.getItem("token");
        const headers = { Authorization: token };
        axios.put(`/api/user/cart/${_id}`, {}, { headers })
            .then(res => {
                const cart = this.state.cart.filter(c => {
                    return c._id !== _id;
                });
                this.props.deleteFromCart(_id)
                this.setState({ cart })
            })
    }

    render() {

        const { user, cart } = this.props;
        // const { cart } = this.state;
        let sum = 0;
        const displayCart = cart.map(c => {
            sum = sum + c.price;
            this.loadImages(c.imagespath[0], c._id)
            return (
                <div className="product product-widget" key={c._id}>
                    <div className="product-thumb">
                        <img
                            id={c._id}
                            alt=""
                        />
                    </div>
                    <div className="product-body">
                        <h3 className="product-price">
                            {c.price}
                            {/* <span className="qty">x3</span> */}
                        </h3>
                        <h2 className="product-name">
                            <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                                {c.name}
                            </a>
                        </h2>
                    </div>
                    <button className="cancel-btn" onClick={() => this.deleteFromCart(c._id)}>
                        <i className="fa fa-trash" />
                    </button>
                </div>
            )
        })
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

                            {!!Object.entries(this.props.user).length && (<li>
                                <Link to="/addproduct">
                                    <Icon name="add square" />Add Product
                                </Link>
                            </li>)}


                            <li>
                                <a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">
                                    <i className="fa fa-heart-o" /> My Wishlist
    </a>
                            </li>

                            <li>
                                <Link to="/checkout">
                                    <i className="fa fa-check" /> Checkout
    </Link>
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
                                <span className="qty">{cart.length}</span>
                            </div>
                            <strong className="text-uppercase">My Cart:</strong>
                            <br />
                            <span>{sum}</span>
                        </a>
                        <div className="custom-menu">
                            <div id="shopping-cart">
                                <div className="shopping-cart-list">
                                    {displayCart}
                                </div>
                                <div className="shopping-cart-btns">
                                    {/* <button className="main-btn">View Cart</button> */}
                                    <button className="main-btn" onClick={() => this.props.history.push('/checkout')}>
                                        Checkout and view cart <i className="fa fa-arrow-circle-right" />
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
        user: state.user,
        cart: state.cart
    }
}
export default withRouter(connect(mapStateToProps,
    {
        logout,
        deleteFromCart,
        inserInCart
    })(Right));

