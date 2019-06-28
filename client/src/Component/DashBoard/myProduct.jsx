import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Card,
  TransitionablePortal,
  Segment,
  Image,
  Button,
  Header
} from "semantic-ui-react";
import axios from "../../axios";

class MyProduct extends Component {
  state = {
    products: [],
    message: "",
    open: false,
    openModal: false,
    animation: "fade"
  };
  componentDidMount() {
    const headers = { Authorization: this.props.user.token };
    axios
      .get(`/api/product/myproduct/123123`, { headers })
      .then(res => {
        this.setState({ products: res.data.products });
      })
      .catch(err => console.log("nothing"));
  }
  DeleteHandler = id => {
    const headers = { Authorization: this.props.user.token };
    axios.delete(`/api/product/${id}`, { headers }).then(res => {
      this.setState({ message: res.data.message, open: true });
      const products = this.state.products.filter(p => {
        return p._id !== id;
      });
      this.setState({ products });
      setTimeout(() => {
        this.setState({ message: "", open: false });
      }, 2500);
      console.log(res.data);
    });
  };
  // show = () => this.setState({ openModal: true })
  // close = () => this.setState({ openModal: false })
  render() {
    const { products, open, message } = this.state;

    // const displayProducts = products.map(product => {
    //   return (
    //     <React.Fragment key={product._id}>
    //       <TransitionablePortal open={open}>
    //         <Segment
    //           style={{
    //             left: "45%",
    //             position: "fixed",
    //             top: "0%",
    //             zIndex: 1000,
    //             width: "15%",
    //             backgroundColor: "gainsboro",
    //             textAlign: "center"
    //           }}
    //         >
    //           <Header>Message</Header>
    //           <p>{message}</p>
    //         </Segment>
    //       </TransitionablePortal>
    //       <Card>
    //         <Card.Content>
    //           <Image
    //             floated="right"
    //             src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
    //           />
    //           <Card.Header>{product.name}</Card.Header>
    //           <Card.Meta>{product.category}</Card.Meta>
    //           <Card.Description>{product.description}</Card.Description>
    //         </Card.Content>
    //         <Card.Meta textAlign="right" content={product.price} />
    //         <Card.Content extra>
    //           <div className="ui two buttons">
    //             <Button basic color="green">
    //               <Link to={`/edit/${product._id}`}>Edit</Link>
    //             </Button>
    //             <Button
    //               basic
    //               color="red"
    //               onClick={() => this.DeleteHandler(product._id)}
    //             >
    //               Delete
    //             </Button>
    //           </div>
    //         </Card.Content>
    //       </Card>
    //     </React.Fragment>
    //   );
    // });



    const displayProducts = products.map(product => {
      return (
        <div
          className="product product-single slick-slide slick-active"
          tabIndex={-1}
          role="tabpanel"
          id="slick-slide11"
          style={{ width: 263 }}
          data-slick-index={1}
          aria-hidden="false"
        >
          <div className="product-thumb">
            <div className="product-label">
              <span className="sale">-20%</span>
            </div>
            <ul className="product-countdown">
              <li>
                <span>00 H</span>
              </li>
              <li>
                <span>00 M</span>
              </li>
              <li>
                <span>00 S</span>
              </li>
            </ul>
            <button className="main-btn quick-view" tabIndex={-1}>
              <i className="fa fa-search-plus" /> Quick view
                        </button>
            <img src="https://react.semantic-ui.com/images/avatar/large/steve.jpg" alt="" />
          </div>
          <div className="product-body">
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
            <h2 className="product-name">
              <a
                href="file:///C:/Users/usman/Desktop/e-shop/index.html#"
                tabIndex={-1}
              >
                Product Name Goes Here
                          </a>
            </h2>
            <div className="product-btns">
              <button className="main-btn icon-btn" tabIndex={-1}>
                <i className="fa fa-heart" />
              </button>
              <button className="main-btn icon-btn" tabIndex={-1}>
                <i className="fa fa-exchange" />
              </button>
              <button
                className="primary-btn add-to-cart"
                tabIndex={-1}
              >
                <i className="fa fa-shopping-cart" /> Add to Cart
                          </button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div>
        <Card.Group>{displayProducts}</Card.Group>
      </div>
    );
  }
}
const mapDispatchToProps = state => {
  return {
    user: state.user.user
  };
};
export default connect(mapDispatchToProps)(MyProduct);