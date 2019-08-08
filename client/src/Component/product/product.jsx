import React, { Component } from 'react';
import firebase from '../../firebase';
import { withRouter } from 'react-router-dom';
import axios from '../../axios';
import { inserInCart } from '../../store/Action/cartAction';
import { connect } from 'react-redux';

class Product extends Component {
    state = {
        url: '',
        open: false,
        rating: [...Array(5)],
        reviews: []
    }
    componentDidMount() {
        const { ImageUrl } = this.props;
        const storageRef = firebase.storage().ref(`/products`);
        storageRef.child(`/${ImageUrl}.jpg`).getDownloadURL().then((url) => {
            this.setState({ url })
            // document.getElementById(`imageUrl${i}`).src = url;
            this.getReview();
        })
    }
    getReview = () => {
        axios.get(`/api/product/review/${this.props._id}`)
            .then(res => {
                this.setState({ reviews: res.data })
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
                if (res.data.success) {
                    this.setState({ message: res.data.message })
                    this.props.inserInCart(res.data.cart);
                }
                else {
                    this.setState({ message: res.data.message, open: true });
                    setTimeout(() => {
                        this.setState({ message: "", open: false });
                    }, 2500);
                    console.log(res.data);
                }

            })
    }
    render() {
        const { name, price, _id, i } = this.props;
        const { url, rating, reviews } = this.state;
        let sumRating = reviews.reduce((total, r) => total + r.rating, 0)
        sumRating = Boolean(sumRating) ? Math.round(sumRating / reviews.length) : 0;
        const displaRating = rating.map((_, i) => {
            if (sumRating > i) {
                return <i className="fa fa-star" />
            }
            return <i className="fa fa-star-o empty" />
        })
        return (
            <div className="col-md-4 col-sm-6 col-xs-6">
                <div className="product product-single">
                    <div className="product-thumb" onClick={() => this.props.history.push(`/product/${_id}`)}>
                        <button className="main-btn quick-view">
                            <i className="fa fa-search-plus" /> Quick view
                      </button>
                        <img src={url} alt="" />
                    </div>
                    <div className="product-body">
                        <h3 className="product-price">
                            {price}{" "}
                            {/* <del className="product-old-price">$45.00</del> */}
                        </h3>
                        <div className="product-rating">
                            {displaRating}
                        </div>
                        <h2 className="product-name">
                            <span>{name}</span>
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