import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios';
import { Grid, Segment, Form, Header, Icon, Button, Radio } from 'semantic-ui-react';
class AccountSetting extends Component {
    state = {
        user: {},
        errors: {},
        loading: false,
        token: localStorage.getItem('token')
    }
    componentWillReceiveProps(nextProps) {
        // const { userId } = nextProps;
        if (nextProps.userId) {
            const headers = { Authorization: this.state.token };
            axios.get(`/api/user/${nextProps.userId}`, { headers })
                .then(res => {
                    if (res.data.success) {
                        this.setState({ user: res.data.user })
                    }
                })
        }
    }
    handleChange = evt => {
        const { user } = this.state;
        const name = evt.target.name;
        user[name] = evt.target.value;
        this.setState({ user });
    };
    handleChangeRadio = (e, { role }) => {
        const { user } = this.state;
        user.role = role
        this.setState({ user });
        console.log(role)
    }
    handleSubmit = () => {
        const { user } = this.state;
        const token = localStorage.getItem('token')
        const { userId } = this.props;
        const headers = { Authorization: token };

        axios.post(`/api/user/${userId}`, { ...user }, { headers })
            .then(res => {
                console.log(res.data)
                if (res.data.success) {
                    localStorage.setItem("token", `bearer ${res.data.token}`);
                }
                else{
                    
                }
            })
    }
    render() {
        const { errors, loading, user } = this.state;
        const { email, username, role, phone, password, passwordConfirmation } = user;
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
                </Grid.Column>
            </Grid>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userId: state.user._id
    }
}
export default connect(mapStateToProps)(AccountSetting);