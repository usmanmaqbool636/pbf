import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { setUser } from "../../store/Action/userAction";
import axios from "../../axios";
import jwt from 'jsonwebtoken';

import {
  Grid,
  Button,
  Form,
  Header,
  Message,
  Icon,
  Segment
} from "semantic-ui-react";
class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {
      message: ""
    },
    loading: false
  };
  componentDidMount() {
    document.title = "Login to PBF";
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token.split(" ")[1]);
      user.token = token;
      this.props.setUser(user);
      this.props.history.push('/');
    }

  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    if (!email && !password) {
      this.setState({
        errors: {
          message: "both fields are requried"
        }
      });
    } else {
      axios.post("/api/user/login", { email, password }).then(res => {
        console.log(res.data);
        if (!res.data.success) {
          this.setState({ errors: res.data });
        } else {
          this.setState({ errors: {} });
          localStorage.setItem("token", `bearer ${res.data.token}`);
          this.props.setUser(res.data);
          this.props.history.push("/");
        }
      });
    }
  };

  render() {
    const { password, email, errors, loading } = this.state;
    console.log(errors.message);
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" icon color="purple" textAlign="center">
            <Icon name="connectdevelop" color="purple" />
            Login to PBF
          </Header>
          <Segment>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email Address"
                onChange={this.handleChange}
                type="email"
                value={email}
              />

              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                onChange={this.handleChange}
                type="password"
                value={password}
              />
              <Button color="purple" fluid size="large" loading={loading}>
                Submit
              </Button>
            </Form>
          </Segment>
          {errors.message && (
            <Message error>
              <h3>Error</h3>
              {errors.message}
            </Message>
          )}
          <Message>
            Not have an account? <Link to="/register"> Register </Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
export default connect(
  null,
  { setUser }
)(Login);
