import React, { Component } from 'react';
import firebase from '../../firebase';
import { withRouter } from 'react-router-dom';
import axios from '../../axios';
import { inserInCart } from '../../store/Action/cartAction';
import { connect } from 'react-redux';

class Product extends Component {
    state = {
        url: '',
    }
    componentDidMount() {
        const { ImageUrl } = this.props;
        const storageRef = firebase.storage().ref(`/products`);
        storageRef.child(`/${ImageUrl}.jpg`).getDownloadURL().then((url) => {
            this.setState({ url })
            // document.getElementById(`imageUrl${i}`).src = url;
        })
    }
    addToCart = (_id) => {
        const token = localStorage.getItem("token");
        const headers = { Authorization: token };
        if (!token) {
            // this.props.history.push('/login');
        }
        axios.put(`/api/product/cart/${_id}`, {}, { headers })
            .then(res => {
                if (res.data.success)
                this.setState({ message: res.data.message })
                this.props.inserInCart(res.data.cart);

            })
    }
    render() {
        const { name, price, _id, i } = this.props;
        const { url } = this.state;
        return (
            <div className="col-md-4 col-sm-6 col-xs-6">
                <div className="product product-single">
                    <div className="product-thumb" onClick={() => this.props.history.push(`/product/${_id}`)}>
                        <button className="main-btn quick-view">
                            <i className="fa fa-search-plus" /> Quick view
                      </button>
                        <img src={url} alt />
                    </div>
                    <div className="product-body">
                        <h3 className="product-price">
                            {price}{" "}
                            {/* <del className="product-old-price">$45.00</del> */}
                        </h3>
                        <div className="product-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-o empty" />
                        </div>
                        <h2 className="product-name">
                            <a href="#">{name}</a>
                        </h2>
                        <div className="product-btns">
                            <button className="main-btn icon-btn">
                                <i className="fa fa-heart" />
                            </button>
                            <button className="main-btn icon-btn">
                                <i className="fa fa-exchange" />
                            </button>
                            <button className="primary-btn add-to-cart" onClick={() => this.addToCart(_id)}>
                                <i className="fa fa-shopping-cart" /> Add to
                                Cart
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(connect(null, { inserInCart })(Product));