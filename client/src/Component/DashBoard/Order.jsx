import React, { Component } from 'react'
import axios from '../../axios';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';
import { Button, Icon, Transition, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
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

    loadImages = (path, id) => {
        const { products } = this.state;
        const storageRef = firebase.storage().ref(`/products`);
        storageRef.child(`/${path}.jpg`).getDownloadURL().then(url => {
            const newProduct = products.map(p => {
                if (p._id === id) {
                    return { ...p, image: url }
                }
                else {
                    return { ...p }
                }
            })
            document.getElementById(id).src = url
        })
    }
    removefromOrder = id => {
        const headers = { Authorization: this.props.user.token };
        axios.delete(`/api/product/order/${id}`, { headers }).then(res => {
            if (res.data.success) {
                this.setState({ message: res.data.message, open: true });
                let products = this.state.products.filter(p => {
                    return p._id !== id;
                });
                this.setState({ products });
            }
            else {
                this.setState({ message: res.data.message, open: true });
            }
            setTimeout(() => {
                this.setState({ message: "", open: false });
            }, 2500);
        });
    };
    deliver = (id) => {
        axios.post(`/api/product/order/${id}`)
            .then(res => {
                if (res.data.success) {
                    this.setState({ message: res.data.message, open: true });
                    let products = this.state.products.filter(p => {
                        return p._id !== id;
                    });
                    this.setState({ products });
                }
                else {
                    this.setState({ message: res.data.message, open: true });
                }
                setTimeout(() => {
                    this.setState({ message: "", open: false });
                }, 2500);
            });
}
render() {
    const { order, open, message, products } = this.state;
    const displayProducts = products.map((product, i) => {
        if (product.imagespath) {
            this.loadImages(product.imagespath[0], product._id)
        }

        return (
            <div className="product product-single" key={product._id + i} style={{ display: "inline-block", margin: '1rem', width: "20%", }}>
                <div className="product-thumb">
                    <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                    <img src={product.image} alt="img" />
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
                        <Button negative color="blue" onClick={()=>this.deliver(product._id)}> <Icon name="send" /> Deliver this product </Button>
                        {/* </Link> */}

                        <Button onClick={() => this.removefromOrder(product._id)}>
                            <Icon name="delete" />
                            discard
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
const mapDispatchToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapDispatchToProps)(Order);
