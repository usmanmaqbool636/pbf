import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import jwt from "jsonwebtoken";
import { connect } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { setUser } from "./store/Action/userAction";

import Home from "./Component/Home/index";
import Section1 from "./Component/Section1/index";
import Section2 from "./Component/Section2/index";
import Section3 from "./Component/Section3/index";
import Section4 from "./Component/Section4/index";

import Register from "./Component/Auth/Register";
import Login from "./Component/Auth/Login";
import AddProduct from "./Component/product/addProduct";
import ProductPage from "./Component/product/productPage";
import DashBoared from "./Component/DashBoared/dashboared.jsx";
import HOC from "./HOC";
import ProductEdit from "./Component/product/productEdit";
class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token.split(" ")[1]);
      user.token = token;
      this.props.setUser(user);
    }
  }
  render() {
    const { user } = this.props;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <HOC>
                <Home />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
              </HOC>
            );
          }}
        />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />

        <Route
          exact
          path="/product"
          render={() => (
            <HOC>
              <ProductPage />
            </HOC>
          )}
        />
        {(user.role === 1 || user.role === 2) && (
          <Route exact path="/addproduct" component={AddProduct} />
        )}

        <Route exact path="/dashboared" component={DashBoared} />

        <Route path="/edit/:id" component={ProductEdit} />
        <Route
          render={() => (
            <HOC>
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
    user: state.user.user
  };
};
export default withRouter(
  connect(
    mapDispatchTopProps,
    { setUser }
  )(App)
);
