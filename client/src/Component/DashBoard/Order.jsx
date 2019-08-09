import React, { Component } from 'react'
import axios from '../../axios';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';
import { Button, Icon, Transition, Message, Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
class Order extends Component {
    state = {
        order: [],
        products: []
    }
    componentDidMount() {
        axios.get(`/api/user/order/${this.props.userId}`)
            .then(res => {
                const { products } = this.state;
                res.data.order.forEach(o => {
                    axios.get(`/api/product/${o.productId}`)
                        .then(res1 => {
                            const p = { ...res1.data, qty: o.qty || 1, detail: o.detail }
                            products.push(p);
                            console.log(products);
                            this.setState({ products })
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
            this.setState({ products: newProduct })
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
        const headers = { Authorization: this.props.user.token };
        axios.put(`/api/product/order/${id}`, {}, { headers })
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
            console.log(product)
            return (
                <Table.Row>
                    <Table.Cell>{product.name}</Table.Cell>
                    <Table.Cell>{product.price}</Table.Cell>
                    <Table.Cell>{product.qty}</Table.Cell>
                    <Table.Cell>{product.detail.firstname}</Table.Cell>
                    <Table.Cell>{product.detail.address}</Table.Cell>
                    <Table.Cell>{product.detail.province}</Table.Cell>
                    <Table.Cell>{product.detail.city}</Table.Cell>
                    <Table.Cell>{product.detail.zipcode}</Table.Cell>
                    <Table.Cell>{product.detail.contact}</Table.Cell>
                    <Table.Cell>
                        <Button negative color="blue" onClick={() => this.deliver(product._id)}>
                            <Icon name="send" />
                            Deliver this product
                    </Button>
                    </Table.Cell>
                    <Table.Cell>
                        <Button onClick={() => this.removefromOrder(product._id)}>
                            <Icon name="delete" />
                            discard
                            </Button>
                    </Table.Cell>

                </Table.Row>
            )
            return (
                <div className="product product-single" key={product._id + i} style={{ display: "inline-block", margin: '1rem', width: "20%", }}>
                    <div className="product-thumb">
                        <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                        <img src={product.image} alt="img" />
                    </div>
                    <div className="product-body">
                        <h3 className="product-price">{product.price} pkr</h3>
                        <div className="product-rating">
                            <b>quantity {product.qty}</b>
                        </div>
                        <h2 className="product-name">{product.name}</h2>
                        <div className="product-btns">
                            {/* <Link to={`/edit/${product._id}`}> */}
                            <Button negative color="blue" onClick={() => this.deliver(product._id)}> <Icon name="send" /> Deliver this product </Button>
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
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>price</Table.HeaderCell>
                            <Table.HeaderCell>qty</Table.HeaderCell>
                            {/* <Table.HeaderCell>creater</Table.HeaderCell> */}
                            <Table.HeaderCell>deliver to</Table.HeaderCell>
                            <Table.HeaderCell>address</Table.HeaderCell>
                            <Table.HeaderCell>province</Table.HeaderCell>
                            <Table.HeaderCell>city</Table.HeaderCell>
                            <Table.HeaderCell>zipcode</Table.HeaderCell>
                            <Table.HeaderCell>contact</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {displayProducts}
                    </Table.Body>
                </Table>
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
