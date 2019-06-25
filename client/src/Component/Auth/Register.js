import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "../../axios";
import { setUser } from "../../store/Action/userAction";
import {
  Grid,
  Button,
  Form,
  Header,
  Message,
  Icon,
  Segment,
  Radio
} from "semantic-ui-react";
class Register extends Component {
  state = {
    username: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirmation: "",
    errors: {},
    role: "",
    loading: false
  };
  componentDidMount() {
    document.title = "Register an Account";
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  handleChangeRadio = (e, { role }) => this.setState({ role });
  submitHandle = () => {
    const {
      username,
      email,
      password,
      passwordConfirmation,
      phone,
      role
    } = this.state;
    const user = {
      username,
      email,
      password,
      passwordConfirmation,
      phone,
      role
    };

    axios.post("/api/user/register", user).then(res => {
      console.log(res.data);
      if (!res.data.success) {
        this.setState({ errors: res.data.err });
      } else {
        this.setState({ errors: {} });
        localStorage.setItem("token", `bearer ${res.data.token}`);
        this.props.setUser(res.data);
        this.props.history.push("/");
      }
    });
  };

  render() {
    const {
      username,
      password,
      passwordConfirmation,
      email,
      phone,
      errors,
      loading,
      role
    } = this.state;
    console.log(this.state.role);
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" icon color="orange" textAlign="center">
            <Icon name="connectdevelop" color="orange" />
            Register for PBF
          </Header>
          <Segment>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Form.Input
                fluid
                name="username"
                icon="user"
                iconPosition="left"
                placeholder="Username"
                onChange={this.handleChange}
                type="text"
                value={username}
                error={errors.username}
              />
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email Address"
                onChange={this.handleChange}
                type="email"
                value={email}
                error={errors.email || errors.message ? true : false}
              />
              <Form.Group inline>
                <label>Register as:</label>
                <Form.Field
                  control={Radio}
                  label="Customer"
                  name="role"
                  role="0"
                  checked={role === "0"}
                  onChange={this.handleChangeRadio}
                />
                <Form.Field
                  control={Radio}
                  label="Suplier"
                  role="1"
                  checked={role === "1"}
                  onChange={this.handleChangeRadio}
                />
                <Form.Field
                  control={Radio}
                  label="Both"
                  role="2"
                  checked={role === "2"}
                  onChange={this.handleChangeRadio}
                />
              </Form.Group>
              <Form.Input
                fluid
                name="phone"
                icon="call"
                iconPosition="left"
                placeholder="phone"
                onChange={this.handleChange}
                type="string"
                value={phone}
                error={errors.phone}
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
                error={errors.password}
              />

              <Form.Input
                fluid
                name="passwordConfirmation"
                icon="repeat"
                iconPosition="left"
                placeholder="Password Confirmation"
                onChange={this.handleChange}
                type="password"
                value={passwordConfirmation}
                error={errors.password}
              />
              <Button
                color="orange"
                fluid
                size="large"
                loading={loading}
                onClick={this.submitHandle}
              >
                Submit
              </Button>
            </Form>
          </Segment>

          <Message>
            Already a User? <Link to="/login"> Login </Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  null,
  { setUser }
)(Register);
