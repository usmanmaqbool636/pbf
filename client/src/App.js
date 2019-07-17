import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import jwt from "jsonwebtoken";
import { connect } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { setUser } from "./store/Action/userAction";

import Home from "./Component/Home/index";
// import Section1 from "./Component/Section1/index";
import Section2 from "./Component/Section2/index";
// import Section3 from "./Component/Section3/index";
import Section4 from "./Component/Section4/index";

import Register from "./Component/Auth/Register";
import Login from "./Component/Auth/Login";
import AddProduct from "./Component/product/addProduct";
import Products from "./Component/product/productPage";
import SingleProduct from './Component/product/singleProduct';
import DashBoard from "./Component/DashBoard/dashboard.jsx";
// import MyProduct from './Component/DashBoard/myProduct';
import HOC from "./HOC";
import ProductEdit from "./Component/product/productEdit";
import CheckOut from './Component/Checkout/chackout';
import AccountSetting from "./Component/Auth/accountSetting";
import axios from './axios';
class App extends Component {
  componentDidMount() {
    // testing purpose
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token.split(" ")[1]);
      user.token = token;
      this.props.setUser(user);
      axios.get('/api/user/abc')
        .then(res => {

        })
    }
  }
  render() {
    const { user, open } = this.props;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <HOC open={true}>
                <Home />
                <Section2 />
                <Section4 />
              </HOC>
            );
          }}
        />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />

        <Route
          exact
          path="/products/:category/:sub?"
          render={() => (
            <HOC open={open} >
              <Products />
            </HOC>
          )}
        />
        {/* <Route
          exact
          path="/products/:category/:sub?"
          component={}
        /> */}
        {(user.role === 1 || user.role === 2) && (
          <Route exact path="/addproduct" component={AddProduct} />
        )}
        <Route exact path="/product/:id" render={() => (
          <HOC open={open}>
            <SingleProduct />
          </HOC>
        )
        } />

        <Route exact path="/dashboard" component={DashBoard} />
        {/* <Route path="/dashboard/myproducts" component ={MyProduct}/> */}

        <Route path="/edit/:id" component={ProductEdit} />

        <Route path="/checkout" render={() => (
          <HOC open={open}>
            <CheckOut />
          </HOC>
        )} />

        <Route
          exact
          path="/account"
          render={() => (
            <HOC open={open} >
              <AccountSetting />
            </HOC>
          )}
        />
        {/* <Route path="/account" component={AccountSetting} /> */}
        <Route
          render={() => (
            <HOC open={open}>
              <h1> opps Page Not Found</h1>
            </HOC>
          )}
        />

      </Switch>
    );
  }
}
const mapDispatchTopProps = state => {
  return {
    user: state.user,
    open: state.responsive.responsiveNave
  };
};
export default withRouter(
  connect(
    mapDispatchTopProps,
    { setUser }
  )(App)
);
