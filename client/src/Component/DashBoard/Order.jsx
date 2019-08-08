import React, { Component } from 'react'
import axios from '../../axios';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';
import { Button, Icon, Transition, Message } from 'semantic-ui-react';
import product from '../product/product';
class Order extends Component {
    state = {
        order: [],
        products: []
    }
    componentDidMount() {
        axios.get(`/api/user/order/${this.props.userId}`)
            .then(res => {
                // console.log(res.data.order)
                const { products } = this.state;
                res.data.order.forEach(o => {
                    axios.get(`/api/product/${o.productId}`)
                        .then(res1 => {
                            // console.log(res1.data, o.qty)
                            const p = { ...res1.data, qty: o.qty }
                            this.setState({ products: products.concat(p) })
                        })
                })
                this.setState({ order: res.data.order })
            })
    }
    // removefromOrder = id => {
    //     const headers = { Authorization: this.props.user.token };
    //     axios.delete(`/api/product/${id}`, { headers }).then(res => {
    //         if (res.data.success) {
    //             this.setState({ message: res.data.message, open: true });
    //             let products = this.state.products.filter(p => {
    //                 return p._id !== id;
    //             });
    //             this.setState({ products });
    //         }
    //         else {
    //             this.setState({ message: res.data.message, open: true });
    //         }
    //         setTimeout(() => {
    //             this.setState({ message: "", open: false });
    //         }, 2500);
    //     });
    // };
    loadImages = (path, id) => {
        const storageRef = firebase.storage().ref(`/products`);
        storageRef.child(`/${path}.jpg`).getDownloadURL().then(url => {
            // return url;
            document.getElementById(id).src = url
        })
    }
    render() {
        const { order, open, message, products } = this.state;
        const displayProducts = products.map((product, i) => {

            // this.loadImages(product.imagespath[0], product._id + 'img')

            return (
                <div className="product product-single" key={product._id + i} style={{ display: "inline-block", margin: '1rem', width: "20%", }}>
                    <div className="product-thumb">
                        <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                        {/* <img id={product._id + 'img'} alt="img" /> */}
                    </div>
                    <div className="product-body">
                        <h3 className="product-price">{product.price} pkr</h3>
                        <div className="product-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-o empty" />
                        </div>
                        <h2 className="product-name">{product.name}</h2>
                        <div className="product-btns">
                            {/* <Link to={`/edit/${product._id}`}> */}
                            <Button color="blue"> <Icon name="edit" /> discard </Button>
                            {/* </Link> */}

                            <Button negative onClick={() => this.removefromOrder(product._id)}>
                                <Icon name="delete" />
                                Deliver this product
                            </Button>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div style={{ textAlign: "center" }} >
                <Transition visible={open} animation='scale' duration={500}>
                    <Message size="tiny" compact>
                        <Message.Header>Message </Message.Header>
                        <Message.Content>{message}</Message.Content>
                    </Message>
                </Transition>
                {displayProducts}
            </div>
        );
    }
}
export default Order;
