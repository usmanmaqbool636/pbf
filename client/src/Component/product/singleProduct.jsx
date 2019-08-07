import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../../axios';
import firebase from '../../firebase';
import Slider from './slider/sliderp';
import { inserInCart } from '../../store/Action/cartAction';
import { connect } from 'react-redux';
import Review from './review';
import moment from 'moment';
import { socket } from '../../sockets';
import { Image } from 'semantic-ui-react';
import BreadCrums from '../breadcrums';
class SingleProduct extends Component {

    state = {
        product: {},
        images: [],
        reviews: [],
        rating: [...Array(5)]
    };
    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(`/api/product/:${id}`)
            .then(res => {
                this.setState({ product: res.data })
                this.getReview();
                this.loadImages();
            })
            .catch(err => {
                console.log(err);
            })
    }
    getReview = () => {
        axios.get(`/api/product/review/${this.state.product._id}`)
            .then(res => {
                this.setState({ reviews: res.data })
            })
    }
    loadImages = () => {
        const { imagespath } = this.state.product;
        const { images } = this.state;
        // const { ImageUrl, i } = this.props;
        const storageRef = firebase.storage().ref(`/products`);
        imagespath.forEach((img, i) => {
            storageRef.child(`/${img}.jpg`).getDownloadURL().then(url => {
                images[i] = url;
                this.setState({ images })
            })
        })
    }
    addToCart = (_id) => {
        const token = localStorage.getItem("token");
        const headers = { Authorization: token };
        if (!token) {
            // this.props.history.push('/login');
        }
        socket.emit('cl', { _id: '8237r89weufosd' })
        socket.on('bk', (data) => {
            console.log(data);
        })
        axios.put(`/api/product/cart/${_id}`, {}, { headers })
            .then(res => {
                if (res.data.success) {
                    this.setState({ message: res.data.message })
                    this.props.inserInCart(res.data.cart);
                }
            })
    }

    render() {
        const { product, images, reviews, rating } = this.state;
        let sumRating = 0;
        const displayReviews = reviews.map(r => {
            sumRating = sumRating + r.rating;
            const displayRating = rating.map((_, i) => {
                if (r.rating > i) {
                    return <i className="fa fa-star" />
                }
                return <i className="fa fa-star-o empty" />
            })
            return (
                <div className="single-review">
                    <div className="review-heading" style={{ color: 'steelblue' }}>
                        <div >
                            {/* <a href="#"> */}
                            <i className="fa fa-user-o" /> {r.name}
                            {/* </a> */}
                        </div>
                        <div>
                            {/* <a href="#"> */}
                            <i className="fa fa-clock-o" />
                            {/* {" "} {moment(r.createdAt, "YYYYMMDD").fromNow()} */}
                            {moment(r.createdAt).calendar()}
                            {/* </a> */}
                        </div>
                        <div className="review-rating pull-right">
                            {displayRating}
                            {/* <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" /> */}
                        </div>
                    </div>
                    <div className="review-body">
                        <p>
                            {r.review}
                        </p>
                    </div>
                </div>
            )
        })
        sumRating = Math.round(sumRating / reviews.length);
        console.log(product);
        return (
            <React.Fragment>
                {/* <BreadCrums path={['product', product.category, product.subcategory,product._id]} /> */}
                <div className="section">
                    {/* container */}
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            {/*  Product Details */}
                            <div className="product product-details clearfix">
                                <div className="col-md-6">
                                    <div id="product-main-view">
                                        <div className="product-view">
                                            {/* {images.map(img => {
                                            return (
                                                <img src={img} alt />
                                                )

                                            })} */}
                                            {/* <Slider images={images} /> */}
                                            <Image
                                                as='div'
                                                alt={product.name + '1/2'}
                                                size='large'
                                                src={images[0]}
                                                rounded
                                            />
                                            {images[1] && (
                                                <Image
                                                    as='div'
                                                    alt={product.name +"2/2"}
                                                    size='large'
                                                    src={images[1]}
                                                    rounded
                                                />
                                                )
                                            }
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="product-body">
                                        <h2 className="product-name">{product.name}</h2>
                                        <h3 className="product-price">
                                            {product.price}
                                        </h3>
                                        <div>
                                            <div className="product-rating">
                                                {rating.map((_, i) => {
                                                    if (sumRating > i) {
                                                        return <i className="fa fa-star" />
                                                    }
                                                    return <i className="fa fa-star-o empty" />
                                                })}
                                            </div>
                                            <a href="#">{reviews.length} Review(s)</a>
                                        </div>
                                        <p>
                                            <strong>Availability:</strong> In Stock
            </p>
                                        <p>
                                            <strong>Brand:</strong> E-SHOP
            </p>
                                        <div className="product-options">
                                            <ul className="size-option">
                                                <li>
                                                    <span className="text-uppercase">Size:</span>
                                                </li>
                                                <li className="active">
                                                    <a href="#">S</a>
                                                </li>
                                                <li>
                                                    <a href="#">XL</a>
                                                </li>
                                                <li>
                                                    <a href="#">SL</a>
                                                </li>
                                            </ul>
                                            <ul className="color-option">
                                                <li>
                                                    <span className="text-uppercase">Color:</span>
                                                </li>
                                                <li className="active">
                                                    <a
                                                        href="#"
                                                        style={{ backgroundColor: "#475984" }}
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        style={{ backgroundColor: "#8A2454" }}
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        style={{ backgroundColor: "#BF6989" }}
                                                    />
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        style={{ backgroundColor: "#9A54D8" }}
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-btns">
                                            <div className="qty-input">
                                                <span className="text-uppercase">QTY: </span>
                                                <input className="input" type="number" />
                                            </div>
                                            <button className="primary-btn add-to-cart" onClick={() => this.addToCart(product._id)}>
                                                <i className="fa fa-shopping-cart" /> Add to Cart
              </button>
                                            <div className="pull-right">
                                                <button className="main-btn icon-btn">
                                                    <i className="fa fa-heart" />
                                                </button>
                                                <button className="main-btn icon-btn">
                                                    <i className="fa fa-exchange" />
                                                </button>
                                                <button className="main-btn icon-btn">
                                                    <i className="fa fa-share-alt" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="product-tab">
                                        <ul className="tab-nav">
                                            <li className="active">
                                                <a data-toggle="tab" href="#tab1">
                                                    Description
                </a>
                                            </li>
                                            <li>
                                                <a data-toggle="tab" href="#tab2">
                                                    Details
                                            </a>
                                            </li>
                                            <li>
                                                <a data-toggle="tab" href="#tab3">
                                                    Reviews ({reviews.length})
                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div id="tab1" className="tab-pane fade in active">
                                                <p>
                                                    {product.desription}
                                                </p>
                                            </div>
                                            <div id="tab2" className="tab-pane fade in active">
                                                <p>
                                                    Details
                                            </p>
                                            </div>
                                            <div id="tab3" className="tab-pane fade in">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="product-reviews">
                                                            {displayReviews}
                                                            <ul className="reviews-pages">
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
                                                    <Review getReview={this.getReview} productId={product._id} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Product Details */}
                        </div>
                        {/* /row */}
                    </div>
                    {/* /container */}
                </div>

            </React.Fragment>
        )
    }
}
export default withRouter(connect(null, { inserInCart })(SingleProduct));