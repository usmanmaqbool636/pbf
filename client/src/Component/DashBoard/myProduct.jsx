import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import firebase from '../../firebase';
import {

  Button,
  Icon,
  Message,
  Transition
} from "semantic-ui-react";
import axios from "../../axios";

class MyProduct extends Component {
  state = {
    products: [],
    message: "",
    open: false,
    animation: "fade"
  };
  componentDidMount() {
    const headers = { Authorization: this.props.user.token };
    axios
      .get(`/api/product/myproduct`, { headers })
      .then(res => {
        this.setState({ products: res.data.products });
      })
      .catch(err => console.log("nothing"));
  }
  DeleteHandler = id => {
    const headers = { Authorization: this.props.user.token };
    axios.delete(`/api/product/${id}`, { headers }).then(res => {
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
  loadImages = (path, id) => {
    const storageRef = firebase.storage().ref(`/products`);
    storageRef.child(`/${path}.jpg`).getDownloadURL().then(url => {
      // return url;
      document.getElementById(id).src=url
    })
  }
  render() {
    const { products, open, message } = this.state;
    const displayProducts = products.map((product, i) => {
      this.loadImages(product.imagespath[0], product._id + 'img')
      return (
        <div className="product product-single" key={product._id + i} style={{ display: "inline-block", margin: '1rem', width: "20%", }}>
          <div className="product-thumb">
            <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
            <img id={product._id + 'img'} alt="img" />
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
            <h2 className="product-name"><a href="file:///C:/Users/usman/Desktop/e-shop/index.html#">{product.name}</a></h2>
            <div className="product-btns">
              <Link to={`/edit/${product._id}`}><Button color="blue"> <Icon name="edit" /> Edit </Button></Link>
              <Button negative onClick={() => this.DeleteHandler(product._id)}><Icon name="delete" /> Delete </Button>
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
const mapDispatchToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapDispatchToProps)(MyProduct);