import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  TransitionablePortal,
  Segment,
  Image,
  Button,
  Header,
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
        <div className="product product-single" style={{ display: "inline-block", margin: '1rem', width: "20%", }}>
          <div className="product-thumb">
            <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
            <img src="https://react.semantic-ui.com/images/avatar/large/steve.jpg" alt="" />
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
        {displayProducts}
        <Transition visible={true} animation='scale' duration={500}>
          <Message size="tiny"  compact>
            <Message.Header>Message </Message.Header>
            <Message.Content>{message}</Message.Content>
          </Message>
        </Transition>
        {/* <Card.Group>{displayProducts}</Card.Group> */}

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